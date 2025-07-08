'use client';

import { useTranslation } from 'react-i18next';
import { spacing, typography, buttons } from '@/lib/design-system';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  const { t } = useTranslation('landing');

  return (
    <section className={`relative ${spacing.section} bg-gradient-to-r from-[#003566] to-[#001d3d]`}>
      <div className={spacing.container}>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`${typography.heading[2]} font-playfair mb-6`}>{t('finalCta.title')}</h2>
          <p className={`${typography.body.xl} mb-8`}>{t('finalCta.subtitle')}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className={`${buttons.primary} ${buttons.sizes.lg}`}>
              {t('finalCta.cta.primary')}
            </Button>
            <Button className={`${buttons.ghost} ${buttons.sizes.lg}`}>
              {t('finalCta.cta.secondary')}
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {(t('finalCta.features', { returnObjects: true }) as string[]).map((feature, index) => (
              <span key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ffd60a]" />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 