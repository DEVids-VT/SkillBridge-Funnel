'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { spacing, buttons } from '@/lib/design-system';
import { CheckCircle, Mail, Bell, Rocket, Users, Star, Zap, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  const { t, ready } = useTranslation('preorder');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsSubmitted(true);
      setEmail('');
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Email submission error:', error);
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Users,
      title: t('finalCTA.benefits.0.title'),
      description: t('finalCTA.benefits.0.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Star,
      title: t('finalCTA.benefits.1.title'),
      description: t('finalCTA.benefits.1.description'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: t('finalCTA.benefits.2.title'),
      description: t('finalCTA.benefits.2.description'),
      color: 'from-blue-500 to-blue-600'
    }
  ];

  if (!ready) {
    return (
      <section className={`relative ${spacing.section} bg-gradient-to-r from-[#003566] to-[#001d3d]`}>
        <div className={spacing.container}>
          <div className="text-center px-4">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-8">
              Join the Future of Hiring
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-200">
              Be among the first to experience SkillBridge when we launch.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative ${spacing.section} bg-gradient-to-r from-[#003566] to-[#001d3d]`}>
      {/* Mobile-optimized Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#ffd60a]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#ffc300]/10 rounded-full blur-xl sm:blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className={spacing.container}>
        <div className="text-center max-w-4xl mx-auto relative z-10 px-4">
          {/* Mobile-optimized Launch countdown badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#ffd60a] text-[#000814] text-xs sm:text-sm font-bold mb-6 sm:mb-8 animate-bounce">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-center">{t('finalCTA.badge')}</span>
          </div>
          
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
            {t('finalCTA.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
            {t('finalCTA.subtitle')}
          </p>
          
          {/* Mobile-optimized Email Collection Form */}
          {!isSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="max-w-lg mx-auto mb-8 sm:mb-10">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('finalCTA.form.placeholder')}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffd60a] focus:ring-2 focus:ring-[#ffd60a]/20 transition-all duration-300 text-sm sm:text-base"
                    required
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="flex items-center justify-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-red-400 text-sm text-center">{error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className={`${buttons.primary} font-playfair px-6 sm:px-8 h-12 sm:h-[56px] text-base sm:text-lg rounded-xl w-full ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  style={{ boxShadow: '0 8px 32px 0 rgba(255, 214, 10, 0.3)' }}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-[#000814] border-t-transparent rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <>
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      {t('finalCTA.form.button')}
                    </>
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-lg mx-auto mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-3 p-4 sm:p-6 bg-green-500/20 border-2 border-green-500/30 rounded-xl">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 flex-shrink-0" />
                <div className="text-center">
                  <p className="text-green-400 font-bold text-base sm:text-lg">{t('finalCTA.form.success.title')}</p>
                  <p className="text-green-400/80 text-sm">{t('finalCTA.form.success.subtitle')}</p>
                </div>
              </div>
            </div>
          )}

          {/* Mobile-optimized Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-semibold text-sm sm:text-base mb-1">{benefit.title}</p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile-optimized Trust indicators */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
            {(t('finalCTA.trust', { returnObjects: true }) as string[]).map((trust: string, index: number) => (
              <span key={index} className="flex items-center justify-center gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffd60a] flex-shrink-0" />
                <span className="text-center">{trust}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 