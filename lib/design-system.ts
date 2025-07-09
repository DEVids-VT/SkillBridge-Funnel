// Design system constants for SkillBridge funnel - consistent dark theme styling

// Color palette
export const colors = {
  dark: '#000814', // Main dark background
  blueDark: '#001d3d', // Deep blue
  blue: '#003566', // Lighter dark blue
  orange: '#ffc300', // Orange accent
  yellow: '#ffd60a', // Yellow accent
  white: '#ffffff', // White for text and highlights
  gray: {
    100: '#f3f4f6',
    200: '#e5e7eb', 
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

// Spacing
export const spacing = {
  container: 'container mx-auto px-4 lg:px-8',
  section: 'py-16 md:py-24',
  sectionSmall: 'py-12 md:py-16',
  headerOffset: 'pt-32',
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  }
};

// Typography
export const typography = {
  heading: {
    1: 'text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight',
    3: 'text-2xl md:text-3xl font-bold text-white',
    4: 'text-xl md:text-2xl font-bold text-white',
    5: 'text-lg md:text-xl font-semibold text-white',
    6: 'text-base md:text-lg font-semibold text-white',
  },
  body: {
    default: 'text-base text-gray-200 leading-relaxed',
    lg: 'text-lg text-gray-200 leading-relaxed',
    xl: 'text-xl text-gray-200 leading-relaxed',
    sm: 'text-sm text-gray-300',
    xs: 'text-xs text-gray-400',
  },
  accent: {
    yellow: 'text-[#ffd60a]',
    orange: 'text-[#ffc300]',
    blue: 'text-[#003566]',
    white: 'text-white',
  }
};

// Layouts
export const layouts = {
  pageHeader: 'text-center mb-16 relative',
  pageHeaderBackground:
    'absolute -top-10 left-0 right-0 h-20 bg-gradient-to-r from-[#001d3d] to-[#003566] rounded-b-3xl -z-10',
  pageTitle: `${typography.heading[1]} mb-6`,
  pageDescription: 'text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed',
  sectionHeader: 'text-center mb-12 md:mb-16',
  sectionTitle: `${typography.heading[2]} mb-4`,
  sectionSubtitle: 'text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed',
  grid: {
    cards2: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8',
    cards3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
    cards4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6',
    features: 'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center',
  },
};

// Card styles
export const cards = {
  base: 'border-2 border-[#003566] bg-[#001d3d] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#ffc300]',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl',
  feature: 'p-6 md:p-8 border-2 border-[#003566] bg-[#001d3d] rounded-xl hover:border-[#ffd60a] transition-all duration-300 group',
  testimonial: 'p-6 bg-[#001d3d] border border-[#003566] rounded-xl hover:border-[#ffd60a] transition-all duration-300',
  pricing: 'p-8 border-2 border-[#003566] bg-[#001d3d] rounded-2xl relative hover:border-[#ffd60a] transition-all duration-300 hover:scale-105',
  header: 'p-6 border-b border-[#003566]',
  body: 'p-6',
  footer: 'p-6 pt-4 border-t border-[#003566] flex items-center justify-between',
};

// Button styles
export const buttons = {
  primary: 'bg-[#ffd60a] text-[#000814] hover:bg-[#ffc300] font-semibold transition-all duration-200 hover:scale-105',
  secondary: 'bg-[#003566] text-white hover:bg-[#001d3d] border border-[#ffd60a] transition-all duration-200',
  ghost: 'text-white hover:text-[#ffd60a] hover:bg-transparent transition-all duration-200',
  cta: 'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl',
  sizes: {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-12 py-6 text-xl rounded-2xl',
  }
};

// Tag styles
export const components = {
  badge: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border',
  badgeColors: {
    blue: 'bg-[#003566] text-[#ffd60a] border-[#ffd60a]',
    yellow: 'bg-[#ffd60a] text-[#000814] border-[#ffc300]',
    orange: 'bg-[#ffc300] text-[#000814] border-[#ffd60a]',
    white: 'bg-white/10 text-white border-white/30',
    glass: 'bg-white/10 backdrop-blur-sm text-white border-white/30',
  },
  tag: 'px-3 py-1 rounded-full text-xs font-medium',
  tagColors: {
    blue: 'bg-[#003566] text-[#ffd60a]',
    orange: 'bg-[#ffc300] text-[#001d3d]',
    yellow: 'bg-[#ffd60a] text-[#001d3d]',
    white: 'bg-white text-[#001d3d]',
    dark: 'bg-[#000814] text-[#ffd60a]',
  },
  icon: {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  }
};

// Animation classes
export const animations = {
  fadeIn: 'animate-in fade-in duration-500',
  slideUp: 'animate-in slide-in-from-bottom-8 duration-500',
  slideDown: 'animate-in slide-in-from-top-8 duration-500',
  scaleIn: 'animate-in zoom-in-95 duration-300',
  float: 'animate-bounce',
  pulse: 'animate-pulse',
  hover: {
    scale: 'hover:scale-105 transition-transform duration-200',
    lift: 'hover:-translate-y-1 transition-transform duration-200',
    glow: 'hover:shadow-lg hover:shadow-[#ffd60a]/20 transition-shadow duration-300',
  }
};

// Media styles
export const media = {
  // Standard responsive sizing for videos and hero images
  heroSize: 'relative w-full aspect-video max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto',
  
  // Image containers with consistent styling
  imageContainer: {
    hero: 'relative w-full aspect-video max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto rounded-2xl overflow-hidden border-2 border-[#ffd60a]/30',
    heroNoBorder: 'relative w-full aspect-video max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto',
    feature: 'aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#ffd60a]/30',
    portrait: 'aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#ffd60a]/30',
    wide: 'aspect-[4/1] rounded-2xl overflow-hidden border-2 border-[#ffd60a]/30',
    mockup: 'rounded-2xl overflow-hidden border-2 border-[#ffd60a]/30',
  },
  
  // Image styling
  image: {
    cover: 'w-full h-full object-cover',
    contain: 'w-full h-full object-contain',
    center: 'w-full h-full object-center',
    container: '',
    hero: 'w-full h-full rounded-2xl overflow-hidden',
  },
  
  // Video styling
  video: {
    container: 'relative w-full aspect-video max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto',
    player: 'w-full h-full rounded-2xl overflow-hidden',
  },

  // Background effects for hero sections
  heroEffects: {
    blueBlur: 'absolute -bottom-20 -right-24 w-[80%] h-[80%] rounded-full z-0 pointer-events-none',
    blueBlurStyle: {
      background: 'rgba(0, 53, 102, 0.55)',
      filter: 'blur(72px)',
    },
    contentWrapper: 'relative z-10 w-full h-full',
  }
};

// Background effects
export const effects = {
  blurBlobs: {
    blue: 'absolute w-72 h-72 bg-[#003566]/30 rounded-full blur-3xl',
    yellow: 'absolute w-96 h-96 bg-[#ffd60a]/20 rounded-full blur-3xl',
    gradient: 'bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#000814]',
  },
  glassmorphism: 'bg-white/10 backdrop-blur-md border border-white/20',
  gradients: {
    primary: 'bg-gradient-to-r from-[#003566] to-[#001d3d]',
    accent: 'bg-gradient-to-r from-[#ffd60a] to-[#ffc300]',
    hero: 'bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#000814]',
    radial3d: 'bg-[radial-gradient(ellipse_at_center,_#000610_0%,_#000814_40%,_#001d3d_100%)]',
  }
}; 