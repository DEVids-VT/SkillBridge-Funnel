'use client';

import { useTranslation } from 'react-i18next';
import { spacing, typography, layouts, cards, components, animations } from '@/lib/design-system';
import { Rocket, Star } from 'lucide-react';

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
          <h2 className={layouts.sectionTitle}>{t('solution.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('solution.subtitle')}</p>
        </div>

        <div className={layouts.pageDescription}>
          <div className="space-y-8">
            {(t('solution.features', { returnObjects: true }) as Array<{title: string; description: string}>).map((feature, index) => (
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
        </div>
      </div>
    </section>
  );
} 