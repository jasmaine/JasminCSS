/**
 * JasminCSS Configuration Types
 * For jasmin.config.js / jasmin.config.ts
 */

export interface JasminBranding {
  /** Primary brand color (hex, rgb, hsl) */
  primary?: string;
  /** Secondary brand color */
  secondary?: string;
  /** Accent color */
  accent?: string;
  /** Success state color */
  success?: string;
  /** Warning state color */
  warning?: string;
  /** Error state color */
  error?: string;
  /** Info state color */
  info?: string;
}

export interface JasminBreakpoints {
  /** Small breakpoint. Default: '640px' */
  sm?: string;
  /** Medium breakpoint. Default: '768px' */
  md?: string;
  /** Large breakpoint. Default: '1024px' */
  lg?: string;
  /** Extra large breakpoint. Default: '1280px' */
  xl?: string;
  /** 2X large breakpoint. Default: '1536px' */
  '2xl'?: string;
  /** Custom breakpoints */
  [key: string]: string | { raw: string } | undefined;
}

export interface JasminSpacing {
  [key: string]: string;
}

export interface JasminFontFamily {
  /** Sans-serif font stack */
  sans?: string;
  /** Serif font stack */
  serif?: string;
  /** Monospace font stack */
  mono?: string;
  /** Custom font families */
  [key: string]: string | undefined;
}

export interface JasminFontSize {
  xs?: string;
  sm?: string;
  base?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  '3xl'?: string;
  '4xl'?: string;
  '5xl'?: string;
  '6xl'?: string;
  [key: string]: string | undefined;
}

export interface JasminBorderRadius {
  none?: string;
  sm?: string;
  DEFAULT?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  '3xl'?: string;
  full?: string;
  [key: string]: string | undefined;
}

export interface JasminBoxShadow {
  sm?: string;
  DEFAULT?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  inner?: string;
  none?: string;
  [key: string]: string | undefined;
}

export interface JasminColors {
  [colorName: string]: string | {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
    [shade: string]: string | undefined;
  };
}

export interface JasminExtend {
  /** Extend color palette */
  colors?: JasminColors;
  /** Extend spacing scale */
  spacing?: JasminSpacing;
  /** Extend breakpoints */
  breakpoints?: JasminBreakpoints;
  /** Extend font families */
  fontFamily?: JasminFontFamily;
  /** Extend font sizes */
  fontSize?: JasminFontSize;
  /** Extend border radius */
  borderRadius?: JasminBorderRadius;
  /** Extend box shadows */
  boxShadow?: JasminBoxShadow;
}

export interface JasminCorePlugins {
  /** Enable/disable layout utilities */
  layout?: boolean;
  /** Enable/disable spacing utilities */
  spacing?: boolean;
  /** Enable/disable typography utilities */
  typography?: boolean;
  /** Enable/disable color utilities */
  colors?: boolean;
  /** Enable/disable effect utilities */
  effects?: boolean;
  /** Enable/disable animation utilities */
  animations?: boolean;
  /** Enable/disable transform utilities */
  transforms?: boolean;
  /** Enable/disable filter utilities */
  filters?: boolean;
  /** Enable/disable icon utilities */
  icons?: boolean;
  /** Enable/disable background utilities */
  background?: boolean;
  /** Enable/disable column utilities */
  columns?: boolean;
  /** Enable/disable scroll utilities */
  scroll?: boolean;
  /** Enable/disable SVG utilities */
  svg?: boolean;
  /** Enable/disable accessibility utilities */
  accessibility?: boolean;
}

export type JasminPlugin = (helpers: {
  addUtilities: (utilities: Record<string, Record<string, string>>) => void;
  addComponents: (components: Record<string, Record<string, string>>) => void;
  addBase: (base: Record<string, Record<string, string>>) => void;
  theme: (path: string) => any;
  config: (path: string) => any;
}) => void;

export type SafelistPattern = string | RegExp | {
  pattern: RegExp;
  variants?: string[];
};

export interface JasminConfig {
  /** Brand colors */
  branding?: JasminBranding;

  /** Content files to scan for tree-shaking */
  content?: string[];

  /** Dark mode strategy: 'class' or 'media' */
  darkMode?: 'class' | 'media';

  /** Responsive breakpoints */
  breakpoints?: JasminBreakpoints;

  /** Spacing scale */
  spacing?: JasminSpacing;

  /** Font families */
  fontFamily?: JasminFontFamily;

  /** Font sizes */
  fontSize?: JasminFontSize;

  /** Border radius values */
  borderRadius?: JasminBorderRadius;

  /** Box shadow values */
  boxShadow?: JasminBoxShadow;

  /** Extend default theme */
  extend?: JasminExtend;

  /** Enable/disable core plugins */
  corePlugins?: JasminCorePlugins;

  /** Custom plugins */
  plugins?: JasminPlugin[];

  /** Safelist classes to always include */
  safelist?: SafelistPattern[];

  /** Prefix for all classes (e.g., 'j-' produces 'j-flex') */
  prefix?: string;

  /** Important modifier */
  important?: boolean | string;

  /** Output file path */
  output?: string;

  /** Enable source maps */
  sourcemap?: boolean;

  /** Minify output */
  minify?: boolean;
}

export function defineConfig(config: JasminConfig): JasminConfig;

export default JasminConfig;
