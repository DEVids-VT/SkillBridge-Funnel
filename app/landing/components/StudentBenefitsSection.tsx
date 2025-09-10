'use client';

import { useTranslation } from 'react-i18next';
import { spacing, typography, layouts, cards, components, animations, media } from '@/lib/design-system';
import { 
  Clock, Target, TrendingUp, Users, Code, LineChart, Briefcase, GraduationCap, 
  MessageCircle, Network, Trophy, BookOpen, Star
} from 'lucide-react';
import img from "../../../public/images/aigen/Lucid_Realism_A_highquality_professional_photographstyle_image_1.jpg"

export default function StudentBenefitsSection() {
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
    <section className={`relative ${spacing.section}`}>
      <div className={spacing.container}>
        <div className={layouts.sectionHeader}>
          <div className={`${components.badge} ${components.badgeColors.glass} mb-6`}>
            <GraduationCap className={components.icon.sm} />
            <span>{t('students.badge')}</span>
          </div>
          <h2 className={layouts.sectionTitle}>{t('students.title')}</h2>
          <p className={layouts.sectionSubtitle}>{t('students.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {(t('students.benefits', { returnObjects: true }) as Array<{title: string; description: string; icon: string}>).slice(0, 3).map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <div key={index} className={`${cards.glass} p-6 ${animations.hover.lift}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center flex-shrink-0">
                      {IconComponent ? (
                        <IconComponent className="w-6 h-6 text-[#000814]" />
                      ) : (
                        <Star className="w-6 h-6 text-[#000814]" />
                      )}
                    </div>
                    <div>
                      <h3 className={`${typography.heading[6]} mb-2`}>{benefit.title}</h3>
                      <p className={`${typography.body.sm} text-gray-300`}>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative">
            <div className={cards.base}>
              <img 
                src={img.src}
                alt="Student Developer Success Story"
                className={media.image.cover}
              />
            </div>
          </div>
        </div>

        <div className={layouts.grid.cards3}>
          {(t('students.benefits', { returnObjects: true }) as Array<{title: string; description: string; icon: string}>).slice(3).map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div key={index + 3} className={`${cards.feature} ${animations.hover.scale}`}>
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