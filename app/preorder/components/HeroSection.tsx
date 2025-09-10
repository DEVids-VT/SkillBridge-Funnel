'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { annotate } from 'rough-notation';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { spacing, buttons } from '@/lib/design-system';
import { Button } from '@/components/ui/button';
import { Mail, Bell, Zap, CheckCircle, AlertCircle } from 'lucide-react';

export default function HeroSection() {
  const { t, ready } = useTranslation('preorder');
  const titleRef = useRef<HTMLSpanElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && titleRef.current && ready) {
      const annotation = annotate(titleRef.current, {
        type: 'underline',
        color: '#ffd60a',
        strokeWidth: 4,
        animate: true,
        animationDuration: 1000,
        padding: [20, 400, -8, -40],
        iterations: 1,
        multiline: true,
      });
      
      setTimeout(() => {
        annotation.show();
      }, 1200);
    }
  }, [isClient, ready]);


  if (!isClient || !ready) {
    return (
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8">
            The Future of <span>Hiring</span>
          </h1>
          <p className="font-lato text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Be the first to know when we launch and revolutionize how talent connects with opportunity.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className={`relative ${spacing.section} flex-1 flex items-center justify-center`}>
      <div className={spacing.container}>
        <div className="text-center max-w-5xl mx-auto">
          {/* Launch Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#ffd60a]/20 border border-[#ffd60a]/30 text-[#ffd60a] text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-center">{t('hero.badge')}</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8 px-2">
            {t('hero.title.part1')} <span ref={titleRef}>{t('hero.title.part2')}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            {t('hero.subtitle')}
          </p>
          
          {/* Mobile-optimized Video Player */}
          <div className="relative w-full mx-auto mb-8 sm:mb-12">
            {/* Mobile: smaller video container */}
            <div className="relative w-full aspect-video max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
              <div className="relative z-10 w-full h-full">
                <VideoPlayer 
                  src="/videos/channel.mp4"
                  className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden"
                  muted={false}
                />
              </div>
            </div>
          </div>
          
          {/* Demo CTA */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4">
            <a
              href="/contact"
              className={`${buttons.primary} font-playfair px-6 sm:px-8 h-12 sm:h-[56px] text-base sm:text-lg rounded-xl inline-flex items-center justify-center transition-all duration-300 hover:scale-105`}
              style={{ boxShadow: '0 8px 32px 0 rgba(0,24,61,0.18)' }}
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Book a free demo
            </a>
            
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm max-w-sm text-center text-gray-400 px-2">
              <span>And get 1 month free</span>
              <div className="relative group">
                <span className="w-3 h-3 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  The demo is 100% free. Then you can claim 1 month free use of SkillBridge. Only pay for LLM token usage (typically up to $3 per scenario).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 