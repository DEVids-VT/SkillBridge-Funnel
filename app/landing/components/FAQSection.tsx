'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { spacing, typography, layouts, cards, components } from '@/lib/design-system';
import { MessageCircle, Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const { t } = useTranslation('landing');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className={`relative ${spacing.section}`}>
      <div className={spacing.container}>
        <div className={layouts.sectionHeader}>
          <div className={`${components.badge} ${components.badgeColors.glass} mb-6`}>
            <MessageCircle className={components.icon.sm} />
            <span>{t('faq.badge')}</span>
          </div>
          <h2 className={`${layouts.sectionTitle} font-playfair`}>{t('faq.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('faq.subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {(t('faq.items', { returnObjects: true }) as any[]).map((item, index) => (
            <div key={index} className={`${cards.glass} overflow-hidden`}>
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className={typography.heading[6]}>{item.question}</h3>
                {expandedFaq === index ? (
                  <Minus className="w-5 h-5 text-[#ffd60a] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#ffd60a] flex-shrink-0" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-6">
                  <p className={`${typography.body.default} text-gray-300`}>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 