'use client';

import { useTranslation } from 'react-i18next';
import { spacing, typography, layouts, cards, components, animations, effects } from '@/lib/design-system';
import { 
  Clock, Target, TrendingUp, Users, Code, LineChart, Briefcase, GraduationCap, 
  MessageCircle, Network, Trophy, BookOpen, Star
} from 'lucide-react';

export default function CompanyBenefitsSection() {
  const { t } = useTranslation('landing');

  const iconMap = {
    clock: Clock,
    target: Target,
    'trending-up': TrendingUp,
    users: Users,
    code: Code,
    'line-chart': LineChart,
    briefcase: Briefcase,
    'graduation-cap': GraduationCap,
    'message-circle': MessageCircle,
    network: Network,
    trophy: Trophy,
    'book-open': BookOpen,
  };

  return (
    <section className={`relative ${spacing.section} ${effects.gradients.radial3d}`}>
      <div className={spacing.container}>
        <div className={layouts.sectionHeader}>
          <div className={`${components.badge} ${components.badgeColors.blue} mb-6`}>
            <Users className={components.icon.sm} />
            <span>{t('companies.badge')}</span>
          </div>
          <h2 className={`${layouts.sectionTitle} font-playfair`}>{t('companies.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('companies.subtitle')}</p>
        </div>

        <div className={layouts.grid.cards3}>
          {(t('companies.benefits', { returnObjects: true }) as Array<{title: string; description: string; icon: string}>).map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div key={index} className={`${cards.feature} ${animations.hover.scale}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#ffd60a] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {IconComponent ? (
                      <IconComponent className="w-8 h-8 text-[#000814]" />
                    ) : (
                      <Star className="w-8 h-8 text-[#000814]" />
                    )}
                  </div>
                  <h3 className={`${typography.heading[5]} mb-3`}>{benefit.title}</h3>
                  <p className={typography.body.default}>{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 