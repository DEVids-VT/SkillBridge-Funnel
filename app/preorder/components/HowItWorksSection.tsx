'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { spacing, typography, components, effects } from '@/lib/design-system';
import { 
  Play, 
  ArrowRight, 
  ArrowDown,
  Building2, 
  Code, 
  Bot, 
  FileText, 
  Handshake
} from 'lucide-react';

export default function HowItWorksSection() {
  const { t, ready } = useTranslation('preorder');
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      id: 1,
      icon: Building2,
      title: t('howItWorks.steps.0.title'),
      description: t('howItWorks.steps.0.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: Code,
      title: t('howItWorks.steps.1.title'),
      description: t('howItWorks.steps.1.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      icon: Bot,
      title: t('howItWorks.steps.2.title'),
      description: t('howItWorks.steps.2.description'),
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      icon: FileText,
      title: t('howItWorks.steps.3.title'),
      description: t('howItWorks.steps.3.description'),
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      icon: Handshake,
      title: t('howItWorks.steps.4.title'),
      description: t('howItWorks.steps.4.description'),
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  useEffect(() => {
    if (!ready) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [ready, steps.length]);

  if (!ready) {
    return (
      <section className={`relative ${spacing.section} ${effects.gradients.radial3d}`}>
        <div className={spacing.container}>
          <div className="text-center px-4">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-8">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-200">
              Simple Process, Revolutionary Results
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Mobile Layout (Vertical)
  const MobileLayout = () => (
    <div className="space-y-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === activeStep;
        
        return (
          <div
            key={step.id}
            className={`relative transition-all duration-500 ${
              isActive ? 'scale-[1.02]' : 'scale-100'
            }`}
            onClick={() => setActiveStep(index)}
          >
            <div className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
              isActive 
                ? 'bg-[#ffd60a]/10 border-[#ffd60a] shadow-lg shadow-[#ffd60a]/20' 
                : 'bg-white/5 border-white/10 hover:border-[#ffd60a]/50'
            }`}>
              <div className="flex items-start gap-4">
                {/* Step Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ffd60a] to-[#ffc300] shadow-lg shadow-[#ffd60a]/30'
                    : 'bg-gradient-to-r from-[#003566] to-[#001d3d] border-2 border-white/20'
                }`}>
                  <Icon className={`w-6 h-6 transition-all duration-300 ${
                    isActive ? 'text-[#000814]' : 'text-white/70'
                  }`} />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive 
                        ? 'bg-[#000814] text-[#ffd60a]' 
                        : 'bg-[#ffd60a] text-[#000814]'
                    }`}>
                      {step.id}
                    </div>
                    <h3 className={`font-semibold text-sm sm:text-base ${
                      isActive ? 'text-[#ffd60a]' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown className={`w-5 h-5 transition-all duration-300 ${
                  isActive ? 'text-[#ffd60a]' : 'text-white/30'
                }`} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  // Desktop Layout (Horizontal)
  const DesktopLayout = () => (
    <div className="mb-8">
      <div className="relative flex justify-center items-center min-h-[300px]">
        {/* Connection Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-[#ffd60a]/30 to-transparent"></div>
        </div>
        
        {/* Steps with animated flow */}
        <div className="relative flex justify-between items-center w-full max-w-6xl">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isPast = index < activeStep;
            
            return (
              <div
                key={step.id}
                className={`relative z-10 transition-all duration-500 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ffd60a] to-[#ffc300] shadow-lg shadow-[#ffd60a]/50'
                      : isPast
                      ? 'bg-gradient-to-r from-[#003566] to-[#001d3d] border-2 border-[#ffd60a]/50'
                      : 'bg-gradient-to-r from-[#003566] to-[#001d3d] border-2 border-white/20'
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 transition-all duration-300 ${
                      isActive
                        ? 'text-[#000814] animate-pulse'
                        : isPast
                        ? 'text-[#ffd60a]'
                        : 'text-white/70'
                    }`}
                  />
                </div>
                
                {/* Step Number */}
                <div
                  className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#000814] text-[#ffd60a] scale-110'
                      : 'bg-[#ffd60a] text-[#000814]'
                  }`}
                >
                  {step.id}
                </div>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4">
                    <ArrowRight
                      className={`w-6 h-6 transition-all duration-300 ${
                        isPast || isActive
                          ? 'text-[#ffd60a] animate-pulse'
                          : 'text-white/30'
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Active Step Details */}
      <div className="mt-8 text-center">
        <div className="h-24 flex flex-col justify-center">
          <div
            className={`transition-all duration-500 ${
              isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}
          >
            <h3 className={`${typography.heading[5]} mb-2 text-[#ffd60a]`}>
              {steps[activeStep].title}
            </h3>
            <p className={`${typography.body.default} max-w-xl mx-auto text-gray-300`}>
              {steps[activeStep].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`relative ${spacing.section} ${effects.gradients.radial3d}`}>
      <div className={spacing.container}>
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <div className={`${components.badge} ${components.badgeColors.glass} mb-4 sm:mb-6`}>
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{t('howItWorks.badge')}</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Responsive Layout */}
          {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </div>
      </div>
    </section>
  );
} 