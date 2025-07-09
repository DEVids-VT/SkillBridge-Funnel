'use client';

import { useTranslation } from 'react-i18next';
import { spacing, typography, layouts, cards, components, animations } from '@/lib/design-system';
import { Star, Users } from 'lucide-react';

export default function TestimonialsSection() {
  const { t } = useTranslation('landing');

  return (
    <section className={`relative ${spacing.section}`}>
      <div className={spacing.container}>
        <div className={layouts.sectionHeader}>
          <div className={`${components.badge} ${components.badgeColors.yellow} mb-6`}>
            <Star className={components.icon.sm} />
            <span>{t('testimonials.badge')}</span>
          </div>
          <h2 className={`${layouts.sectionTitle} font-playfair`}>{t('testimonials.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('testimonials.subtitle')}</p>
        </div>

        <div className={layouts.grid.cards3}>
          {(t('testimonials.items', { returnObjects: true }) as Array<{quote: string; author: string; role: string; company: string}>).map((testimonial, index) => (
            <div key={index} className={`${cards.testimonial} ${animations.hover.glow}`}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffd60a] text-[#ffd60a]" />
                ))}
              </div>
              <blockquote className={`${typography.body.default} italic mb-6`}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                {/* 
                  IMAGE DESCRIPTION: Testimonial Profile Photos
                  - Professional headshots of testimonial authors
                  - Style: Clean, professional business photos
                  - Requirements: High-quality, diverse professionals
                  - Size: 64x64px circular crop
                  - Include: Various demographics and industries
                  - Background: Neutral or office environment
                */}
                <div className="w-12 h-12 bg-[#ffd60a] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#000814]" />
                </div>
                <div>
                  <div className={`${typography.heading[6]} mb-1`}>{testimonial.author}</div>
                  <div className={`${typography.body.sm} text-gray-400`}>{testimonial.role}</div>
                  <div className={`${typography.body.xs} text-[#ffd60a]`}>{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 