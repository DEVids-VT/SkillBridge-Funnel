'use client';

import { useTranslation } from 'react-i18next';
import { spacing, typography, layouts, cards, components, animations, buttons } from '@/lib/design-system';
import { Award, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  const { t } = useTranslation('landing');

  return (
    <section className={`relative ${spacing.section} bg-[#001d3d]`}>
      <div className={spacing.container}>
        <div className={layouts.sectionHeader}>
          <div className={`${components.badge} ${components.badgeColors.glass} mb-6`}>
            <Award className={components.icon.sm} />
            <span>{t('pricing.badge')}</span>
          </div>
          <h2 className={`${layouts.sectionTitle} font-playfair`}>{t('pricing.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('pricing.subtitle')}</p>
        </div>

        <div className={layouts.grid.cards3}>
          {(t('pricing.plans', { returnObjects: true }) as any[]).map((plan, index) => (
            <div key={index} className={`${cards.pricing} ${plan.popular ? 'border-[#ffd60a] scale-105' : ''} ${animations.hover.glow}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`${components.badge} ${components.badgeColors.yellow}`}>
                    <Star className={components.icon.sm} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`${typography.heading[4]} mb-2`}>{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#ffd60a]">
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className={`${typography.body.sm} text-gray-400`}>/{plan.period}</span>
                  )}
                </div>
                <p className={`${typography.body.sm} text-gray-300`}>{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ffd60a] flex-shrink-0 mt-0.5" />
                    <span className={typography.body.sm}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? buttons.primary : buttons.secondary} ${buttons.sizes.md}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 