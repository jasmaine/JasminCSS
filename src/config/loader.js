import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { defaultConfig } from './defaults.js';

export async function loadConfig(configPath) {
  if (!fs.existsSync(configPath)) {
    throw new Error(`Config file not found: ${configPath}`);
  }

  // Convert to file URL for ESM import
  const fileUrl = pathToFileURL(configPath).href;

  // Add cache buster for watch mode
  const cacheBuster = `?t=${Date.now()}`;
  const module = await import(fileUrl + cacheBuster);

  // Deep merge with defaults
  return deepMerge(defaultConfig, module.default || module);
}

function deepMerge(target, source) {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

export function resolveConfig(config) {
  // Resolve font imports
  const fonts = [];
  const { fontFamily, fontFamilyMono } = config.branding.typography;

  if (fontFamily && fontFamily !== 'system-ui') {
    fonts.push(fontFamily.replace(/\s+/g, '+'));
  }
  if (fontFamilyMono && fontFamilyMono !== 'monospace') {
    fonts.push(fontFamilyMono.replace(/\s+/g, '+'));
  }

  config.resolvedFonts = fonts;

  // Generate CSS custom properties
  config.cssVariables = generateCssVariables(config);

  return config;
}

function generateCssVariables(config) {
  const vars = {};
  const { branding, colors, spacing, breakpoints } = config;

  // Brand colors
  if (branding.colors) {
    Object.entries(branding.colors).forEach(([name, value]) => {
      vars[`--j-${name}`] = value;
    });
  }

  // Extended colors
  if (colors) {
    Object.entries(colors).forEach(([colorName, shades]) => {
      if (typeof shades === 'object') {
        Object.entries(shades).forEach(([shade, value]) => {
          vars[`--j-${colorName}-${shade}`] = value;
        });
      }
    });
  }

  // Spacing
  if (spacing) {
    Object.entries(spacing).forEach(([key, value]) => {
      // Replace dots with underscores for valid CSS variable names
      const safeKey = String(key).replace(/\./g, '_');
      vars[`--j-space-${safeKey}`] = value;
    });
  }

  // Typography
  if (branding.typography) {
    const { fontFamily, fontFamilyMono, baseFontSize, lineHeight } = branding.typography;
    vars['--j-font-sans'] = `"${fontFamily}", system-ui, -apple-system, sans-serif`;
    vars['--j-font-mono'] = `"${fontFamilyMono}", ui-monospace, monospace`;
    vars['--j-font-size-base'] = baseFontSize;
    vars['--j-line-height'] = lineHeight;
  }

  // Border radius
  if (branding.borderRadius) {
    Object.entries(branding.borderRadius).forEach(([key, value]) => {
      vars[`--j-radius-${key}`] = value;
    });
  }

  // Shadows
  if (branding.shadows) {
    Object.entries(branding.shadows).forEach(([key, value]) => {
      vars[`--j-shadow-${key}`] = value;
    });
  }

  return vars;
}
