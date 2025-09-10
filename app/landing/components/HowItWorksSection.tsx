'use client';

import { useTranslation } from 'react-i18next';
import { spacing, typography, layouts, cards, components, animations, media, effects } from '@/lib/design-system';
import { Play, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const { t } = useTranslation('landing');

  return (
    <section className={`relative ${spacing.section} ${effects.gradients.radial3d}`}>
      <div className={spacing.container}>
        <div className={layouts.sectionHeader}>
          <div className={`${components.badge} ${components.badgeColors.glass} mb-6`}>
            <Play className={components.icon.sm} />
            <span>{t('howItWorks.badge')}</span>
          </div>
          <h2 className={layouts.sectionTitle}>{t('howItWorks.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('howItWorks.subtitle')}</p>
        </div>

        <div className="relative">
          {/* 
            IMAGE DESCRIPTION: Process Flow Diagram
            - Horizontal timeline showing 5 steps of the SkillBridge process
            - Visual style: Modern infographic with icons and connecting lines
            - Steps visualization:
              1. Company icon with settings gear (Project Creation)
              2. Developer icon with laptop (Coding)
              3. Robot/AI icon with checkmarks (Assessment)
              4. Document icon with metrics (Feedback)
              5. Handshake icon (Connection)
            - Color scheme: SkillBridge colors with gradient connecting lines
            - Size: Wide format, 1600x400px
            - Include: Subtle animations/hover states
          */}
          <div className={`${media.imageContainer.wide} bg-gradient-to-r from-[#003566] via-[#001d3d] to-[#003566] flex items-center justify-center mb-12`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffd60a] rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-10 h-10 text-[#000814]" />
              </div>
              <p className="text-gray-300">5-Step Process Flow Diagram</p>
              <p className="text-xs text-gray-500 mt-2">1600x400px animated infographic</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {(t('howItWorks.steps', { returnObjects: true }) as Array<{step: string; title: string; description: string}>).map((step, index) => (
              <div key={index} className={`${cards.glass} p-6 text-center ${animations.hover.lift}`}>
                <div className="w-16 h-16 bg-[#ffd60a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#000814] font-bold text-xl">{step.step}</span>
                </div>
                <h3 className={`${typography.heading[6]} mb-3`}>{step.title}</h3>
                <p className={`${typography.body.sm} text-gray-300`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 