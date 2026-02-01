import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/**
 * Twofold Tech - Tailwind Configuration
 *
 * Brand DNA encoded:
 * - Neo-Brutalist design system
 * - International Orange (#FF5F1F) as primary accent
 * - 5px borders as signature element
 * - Bold shadows with hard edges
 * - High contrast, bold typography
 */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],

  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════
      // COLORS - Twofold Brand Palette
      // ═══════════════════════════════════════════════════════════
      colors: {
        // Primary: International Orange
        'tf-orange': '#FF5F1F',
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#FF5F1F', // Brand Orange - Primary
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },

        // Neutrals - High contrast for Neo-Brutalist
        black: '#000000',
        white: '#FFFFFF',

        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },

        // Semantic colors
        success: {
          DEFAULT: '#22C55E',
          light: '#86EFAC',
          dark: '#15803D',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#B45309',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FCA5A5',
          dark: '#B91C1C',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#93C5FD',
          dark: '#1D4ED8',
        },
      },

      // ═══════════════════════════════════════════════════════════
      // TYPOGRAPHY - Bold, Technical, High Impact
      // ═══════════════════════════════════════════════════════════
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        display: ['Space Grotesk', 'Inter', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        // Display sizes for hero/headlines
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '4rem', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '4.75rem', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '6.25rem', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '8.25rem', letterSpacing: '-0.02em' }],
      },

      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      // ═══════════════════════════════════════════════════════════
      // BORDERS - Neo-Brutalist Signature (5px)
      // ═══════════════════════════════════════════════════════════
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px', // Brand signature border
        6: '6px',
        8: '8px',
      },

      // ═══════════════════════════════════════════════════════════
      // SHADOWS - Hard-edged Brutalist Shadows
      // ═══════════════════════════════════════════════════════════
      boxShadow: {
        // Brutalist shadows (no blur, hard offset)
        'neo-sm': '4px 4px 0px 0px #000000',
        'neo': '8px 8px 0px 0px #000000',
        'brutal-sm': '2px 2px 0px 0px #000000',
        brutal: '4px 4px 0px 0px #000000',
        'brutal-md': '6px 6px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-xl': '12px 12px 0px 0px #000000',

        // Orange accent shadows
        'brutal-orange': '4px 4px 0px 0px #FF5F1F',
        'brutal-orange-lg': '8px 8px 0px 0px #FF5F1F',

        // Inverted (light mode on dark backgrounds)
        'brutal-white': '4px 4px 0px 0px #FFFFFF',
        'brutal-white-lg': '8px 8px 0px 0px #FFFFFF',

        // Interactive states
        'brutal-hover': '6px 6px 0px 0px #000000',
        'brutal-active': '2px 2px 0px 0px #000000',
      },

      // ═══════════════════════════════════════════════════════════
      // SPACING - Consistent rhythm
      // ═══════════════════════════════════════════════════════════
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
      },

      // ═══════════════════════════════════════════════════════════
      // ANIMATIONS - Performance-optimized
      // ═══════════════════════════════════════════════════════════
      animation: {
        // Micro-interactions
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',

        // Brutalist emphasis
        'brutal-shake': 'brutalShake 0.5s ease-in-out',
        'brutal-bounce': 'brutalBounce 0.4s ease-out',

        // Loading states
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        brutalShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        brutalBounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },

      // ═══════════════════════════════════════════════════════════
      // TRANSITIONS - Consistent timing
      // ═══════════════════════════════════════════════════════════
      transitionDuration: {
        DEFAULT: '150ms',
        fast: '100ms',
        normal: '200ms',
        slow: '300ms',
      },

      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // ═══════════════════════════════════════════════════════════
      // LAYOUT - Container and breakpoints
      // ═══════════════════════════════════════════════════════════
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      // ═══════════════════════════════════════════════════════════
      // Z-INDEX - Layering system
      // ═══════════════════════════════════════════════════════════
      zIndex: {
        dropdown: '1000',
        sticky: '1100',
        modal: '1200',
        popover: '1300',
        tooltip: '1400',
        toast: '1500',
      },

      // ═══════════════════════════════════════════════════════════
      // BACKGROUND IMAGES
      // ═══════════════════════════════════════════════════════════
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
      },

      // ═══════════════════════════════════════════════════════════
      // ASPECT RATIOS - Common media ratios
      // ═══════════════════════════════════════════════════════════
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        'og-image': '1200 / 630',
      },
    },
  },

  plugins: [
    // Typography plugin for prose content
    require('@tailwindcss/typography'),

    // Container queries
    require('@tailwindcss/container-queries'),

    // Custom plugin for brutalist utilities
    function ({ addUtilities, addComponents, theme }) {
      // Brutalist card component
      addComponents({
        '.card-brutal': {
          backgroundColor: theme('colors.white'),
          border: `5px solid ${theme('colors.black')}`,
          boxShadow: theme('boxShadow.brutal'),
          transition: 'box-shadow 0.15s ease-out, transform 0.15s ease-out',
          '&:hover': {
            boxShadow: theme('boxShadow.brutal-lg'),
            transform: 'translate(-2px, -2px)',
          },
        },
        '.card-brutal-orange': {
          backgroundColor: theme('colors.white'),
          border: `5px solid ${theme('colors.orange.500')}`,
          boxShadow: theme('boxShadow.brutal-orange'),
          '&:hover': {
            boxShadow: theme('boxShadow.brutal-orange-lg'),
            transform: 'translate(-2px, -2px)',
          },
        },
      });

      // Button variants
      addComponents({
        '.btn-brutal': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontWeight: theme('fontWeight.bold'),
          border: `3px solid ${theme('colors.black')}`,
          backgroundColor: theme('colors.white'),
          boxShadow: theme('boxShadow.brutal-sm'),
          transition: 'all 0.15s ease-out',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: theme('boxShadow.brutal'),
            transform: 'translate(-2px, -2px)',
          },
          '&:active': {
            boxShadow: 'none',
            transform: 'translate(2px, 2px)',
          },
        },
        '.btn-brutal-primary': {
          backgroundColor: theme('colors.orange.500'),
          color: theme('colors.white'),
          border: `3px solid ${theme('colors.black')}`,
          '&:hover': {
            backgroundColor: theme('colors.orange.600'),
          },
        },
        '.btn-brutal-dark': {
          backgroundColor: theme('colors.black'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.gray.800'),
          },
        },
      });

      // Focus utilities for accessibility
      addUtilities({
        '.focus-brutal': {
          '&:focus-visible': {
            outline: `3px solid ${theme('colors.orange.500')}`,
            outlineOffset: '2px',
          },
        },
      });

      // Text utilities
      addUtilities({
        '.text-balance': {
          textWrap: 'balance',
        },
        '.text-pretty': {
          textWrap: 'pretty',
        },
      });
    },
  ],
} satisfies Config;
