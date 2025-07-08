'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { annotate } from 'rough-notation';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { spacing, typography, buttons, effects, media } from '@/lib/design-system';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const { t, ready } = useTranslation('landing');
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
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8">
            Your career. <span>Our task.</span>
          </h1>
          <p className="font-lato text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
            Connect with top talent and innovative companies. Watch our story unfold.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className={`relative ${spacing.section} flex-1 flex items-center justify-center`}>
      <div className={spacing.container}>
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8">
            {t('hero.title.part1')} <span ref={titleRef}>{t('hero.title.part2')}</span>
          </h1>
          <p className={`${typography.body.xl} max-w-3xl mx-auto mb-12`}>
            {t('hero.subtitle')}
          </p>
          
          {/* Video Player with offset blue blush background */}
          <div className={`${media.video.container} flex items-center justify-center mb-12`}>
            <div
              className="absolute -bottom-20 -right-24 w-[80%] h-[80%] rounded-full z-0 pointer-events-none"
              style={{
                background: 'rgba(0, 53, 102, 0.55)',
                filter: 'blur(72px)',
              }}
            />
            <div className="relative z-10 w-full h-full">
              <VideoPlayer 
                src="/videos/channel3.mp4"
                className={media.video.player}
              />
            </div>
          </div>
          
          {/* Hero CTA */}
          <div className="flex flex-col items-center justify-center gap-6">
            <svg width="120" height="6" viewBox="0 0 120 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
              <line x1="10" y1="3" x2="110" y2="3" stroke="#003566" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="60" cy="3" r="3" fill="#ffd60a"/>
            </svg>
            <Button
              size="lg"
              className={`${buttons.cta} ${buttons.sizes.xl} font-playfair`}
              style={{ boxShadow: '0 8px 32px 0 rgba(0,24,61,0.18)' }}
            >
              <span>{t('hero.cta.primary')}</span>
              <span className="text-[#ffd60a] ml-2">{t('hero.cta.secondary')}</span>
            </Button>
            <p className={`${typography.body.xs} max-w-xs text-center`}>
              {t('hero.cta.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 