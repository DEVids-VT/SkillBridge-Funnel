'use client';

import { useTranslation } from 'react-i18next';
import { spacing, buttons } from '@/lib/design-system';
import { CheckCircle, Rocket, Users, Star, Zap } from 'lucide-react';

export default function FinalCTASection() {
  const { t, ready } = useTranslation('preorder');


  const benefits = [
    {
      icon: Users,
      title: t('finalCTA.benefits.0.title'),
      description: t('finalCTA.benefits.0.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Star,
      title: t('finalCTA.benefits.1.title'),
      description: t('finalCTA.benefits.1.description'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: t('finalCTA.benefits.2.title'),
      description: t('finalCTA.benefits.2.description'),
      color: 'from-blue-500 to-blue-600'
    }
  ];

  if (!ready) {
    return (
      <section className={`relative ${spacing.section} bg-gradient-to-r from-[#003566] to-[#001d3d]`}>
        <div className={spacing.container}>
          <div className="text-center px-4">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-8">
              Join the Future of Hiring
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-200">
              Be among the first to experience SkillBridge when we launch.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative ${spacing.section} bg-gradient-to-r from-[#003566] to-[#001d3d]`}>
      {/* Mobile-optimized Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#ffd60a]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#ffc300]/10 rounded-full blur-xl sm:blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className={spacing.container}>
        <div className="text-center max-w-4xl mx-auto relative z-10 px-4">
          {/* Mobile-optimized Launch countdown badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#ffd60a] text-[#000814] text-xs sm:text-sm font-bold mb-6 sm:mb-8 animate-bounce">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-center">Ready to launch - Book your demo!</span>
          </div>
          
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
            Ready to Stop Wasting Expert Time?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
            See how SkillBridge automates candidate testing and saves your company thousands in hiring costs
          </p>
          
          {/* Demo CTA */}
          <div className="max-w-lg mx-auto mb-8 sm:mb-10 text-center">
            <a
              href="/contact"
              className={`${buttons.primary} font-playfair px-6 sm:px-8 h-12 sm:h-[56px] text-base sm:text-lg rounded-xl inline-flex items-center justify-center transition-all duration-300 hover:scale-105`}
              style={{ boxShadow: '0 8px 32px 0 rgba(255, 214, 10, 0.3)' }}
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Book a free demo
            </a>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-center text-gray-400 mt-3">
              <span>And get 1 month free</span>
              <div className="relative group">
                <span className="w-3 h-3 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  The demo is 100% free. Then you can claim 1 month free use of SkillBridge. Only pay for LLM token usage (typically up to $3 per scenario).
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-optimized Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-semibold text-sm sm:text-base mb-1">{benefit.title}</p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffd60a] flex-shrink-0" />
              <span className="text-center">No credit card required</span>
            </span>
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffd60a] flex-shrink-0" />
              <span className="text-center">15-minute demo</span>
            </span>
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffd60a] flex-shrink-0" />
              <span className="text-center">Save 75% on hiring time</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 