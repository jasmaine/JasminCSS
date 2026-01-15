// Default JasminCSS Configuration
export const defaultConfig = {
  projectName: 'my-project',
  darkMode: true,
  prefix: '',

  // Content files to scan for class usage (tree-shaking)
  content: [
    './**/*.{html,js,jsx,ts,tsx,vue,svelte,astro}',
    '!./node_modules/**',
    '!./dist/**'
  ],

  // Branding configuration
  branding: {
    colors: {
      primary: '#6366f1',      // Indigo
      secondary: '#ec4899',    // Pink
      accent: '#14b8a6',       // Teal
      success: '#22c55e',      // Green
      warning: '#f59e0b',      // Amber
      error: '#ef4444',        // Red
      info: '#3b82f6'          // Blue
    },
    typography: {
      fontFamily: 'Inter',
      fontFamilyMono: 'JetBrains Mono',
      baseFontSize: '16px',
      lineHeight: 1.6
    },
    borderRadius: {
      none: '0',
      sm: '0.25rem',
      default: '0.5rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
      full: '9999px'
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      glow: '0 0 20px rgb(99 102 241 / 0.4)',
      none: 'none'
    }
  },

  // Selected components
  components: ['buttons', 'cards', 'forms', 'navigation', 'alerts', 'badges'],

  // Selected utilities
  utilities: ['layout', 'spacing', 'typography', 'colors', 'effects', 'animations'],

  // Extended colors palette
  colors: {
    // Grays - Neutral tones with slight warmth
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b'
    },

    // Slate - Cool gray
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },

    // Future-forward colors
    neon: {
      cyan: '#00f5ff',
      pink: '#ff00f5',
      green: '#00ff88',
      blue: '#0088ff',
      purple: '#8800ff',
      yellow: '#ffee00'
    },

    // Glass effects base colors
    glass: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      heavy: 'rgba(255, 255, 255, 0.3)',
      dark: 'rgba(0, 0, 0, 0.1)'
    }
  },

  // Spacing scale
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Animation durations
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '700ms'
    },
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }
  }
};

// Design templates
export const templates = {
  futuristic: {
    branding: {
      colors: {
        primary: '#00f5ff',
        secondary: '#ff00f5',
        accent: '#00ff88',
        success: '#00ff88',
        warning: '#ffee00',
        error: '#ff3366',
        info: '#0088ff'
      },
      typography: {
        fontFamily: 'Space Grotesk'
      },
      borderRadius: {
        default: '0.25rem'
      }
    },
    darkMode: true
  },

  minimal: {
    branding: {
      colors: {
        primary: '#18181b',
        secondary: '#71717a',
        accent: '#3b82f6',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      },
      typography: {
        fontFamily: 'Inter'
      },
      borderRadius: {
        default: '0.25rem'
      }
    },
    darkMode: true
  },

  corporate: {
    branding: {
      colors: {
        primary: '#1e40af',
        secondary: '#475569',
        accent: '#0891b2',
        success: '#15803d',
        warning: '#b45309',
        error: '#b91c1c',
        info: '#0369a1'
      },
      typography: {
        fontFamily: 'DM Sans'
      },
      borderRadius: {
        default: '0.375rem'
      }
    },
    darkMode: true
  },

  creative: {
    branding: {
      colors: {
        primary: '#7c3aed',
        secondary: '#ec4899',
        accent: '#f59e0b',
        success: '#10b981',
        warning: '#f97316',
        error: '#f43f5e',
        info: '#6366f1'
      },
      typography: {
        fontFamily: 'Outfit'
      },
      borderRadius: {
        default: '1rem'
      }
    },
    darkMode: true
  }
};
