'use client';

import { useTranslation } from 'react-i18next';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { spacing, typography, layouts, cards, components, animations, effects } from '@/lib/design-system';

export default function ProblemSection() {
  const { t } = useTranslation('landing');

  return (
    <section className={`relative ${spacing.section} ${effects.gradients.radial3d}`}>
      <div className={spacing.container}>
        <div className={layouts.sectionHeader}>
          <div className={`${components.badge} ${components.badgeColors.glass} mb-6`}>
            <span>{t('problem.badge')}</span>
          </div>
          <h2 className={`${layouts.sectionTitle} font-playfair`}>{t('problem.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('problem.subtitle')}</p>
        </div>

        {/* 
          IMAGE DESCRIPTION: Problem Illustration
          - Central image showing traditional hiring pain points
          - Visual: Split-screen comparison showing:
            Left side: Frustrated HR manager with stack of CVs, calendar full of interviews, confused expressions
            Right side: Developers at computers looking disconnected, question marks over their heads
          - Style: Isometric illustration with SkillBridge color palette
          - Elements: Clock showing wasted time, charts showing poor success rates, broken chain links
          - Size: Large hero-style illustration, 1200x600px
        */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="relative mb-16">
            {/* Mobile-optimized Video Player - matches HeroSection sizing */}
            <div className="relative w-full mx-auto mb-8 sm:mb-12">
              {/* Mobile: smaller video container */}
              <div className="relative w-full aspect-video max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
                <div className="relative z-10 w-full h-full">
                  <VideoPlayer 
                    src="/videos/traditional-hiring-broken.mp4"
                    className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden"
                    loop={true}
                    muted={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={layouts.grid.cards2}>
          {(t('problem.points', { returnObjects: true }) as Array<{title: string; description: string}>).map((point, index) => (
            <div key={index} className={`${cards.feature} ${animations.hover.lift}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#000814] font-bold text-lg">{index + 1}</span>
                </div>
                <div>
                  <h3 className={typography.heading[5]}>{point.title}</h3>
                  <p className={`${typography.body.default} mt-2`}>{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 