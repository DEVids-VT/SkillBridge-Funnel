'use client';

import { useTranslation } from 'react-i18next';
import { spacing, typography, layouts, cards, components, animations, media } from '@/lib/design-system';
import { Rocket, Star, Zap } from 'lucide-react';

export default function SolutionSection() {
  const { t } = useTranslation('landing');

  return (
    <section className={`relative ${spacing.section}`}>
      <div className={spacing.container}>
        <div className={layouts.sectionHeader}>
          <div className={`${components.badge} ${components.badgeColors.yellow} mb-6`}>
            <Rocket className={components.icon.sm} />
            <span>{t('solution.badge')}</span>
          </div>
          <h2 className={`${layouts.sectionTitle} font-playfair`}>{t('solution.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('solution.subtitle')}</p>
        </div>

        <div className={layouts.grid.features}>
          <div className="space-y-8">
            {(t('solution.features', { returnObjects: true }) as any[]).map((feature, index) => (
              <div key={index} className={`${cards.glass} p-6 ${animations.hover.glow}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Star className="w-6 h-6 text-[#000814]" />
                  </div>
                  <div>
                    <h3 className={`${typography.heading[5]} mb-2`}>{feature.title}</h3>
                    <p className={typography.body.default}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 
            IMAGE DESCRIPTION: Solution Dashboard Preview
            - Screenshot/mockup of the SkillBridge platform interface
            - Should show: Clean, modern dashboard with project creation wizard
            - Elements: 
              1. Left sidebar with navigation
              2. Main area showing "Create Project" form with tech stack selection
              3. Right panel with AI suggestions
              4. Preview of generated project requirements
            - Style: High-fidelity UI mockup with SkillBridge branding
            - Include: Realistic data, multiple programming languages, difficulty sliders
            - Size: Desktop screenshot format, 1400x900px
            - Frame: Subtle device frame or browser window
          */}
          <div className="relative">
            <div className={`${media.video.container} flex items-center justify-center mb-12`}>
              <div
                className="absolute -bottom-20 -right-24 w-[80%] h-[80%] rounded-full z-0 pointer-events-none"
                style={{
                  background: 'rgba(0, 53, 102, 0.55)',
                  filter: 'blur(72px)',
                }}
              />
              <div className="relative z-10 w-full h-full">
                <div className={`${cards.base} ${media.video.player}`}>
                  <img 
                    src="/images/aigen/GPT_Image_1_A_highfidelity_UI_mockup_of_the_SkillBridge_platfo_0.png"
                    alt="SkillBridge Platform Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 