'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { annotate } from 'rough-notation';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { spacing, buttons } from '@/lib/design-system';
import { Button } from '@/components/ui/button';
import { Mail, Bell, Zap, CheckCircle, AlertCircle } from 'lucide-react';

export default function HeroSection() {
  const { t, ready } = useTranslation('preorder');
  const titleRef = useRef<HTMLSpanElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && titleRef.current && ready) {
      const annotation = annotate(titleRef.current, {
        type: 'underline',
        color: '#ffd60a',
        strokeWidth: 4,
        animate: true,
        animationDuration: 1000,
        padding: [20, 400, -8, -40],
        iterations: 1,
        multiline: true,
      });
      
      setTimeout(() => {
        annotation.show();
      }, 1200);
    }
  }, [isClient, ready]);

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

  if (!isClient || !ready) {
    return (
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8">
            The Future of <span>Hiring</span>
          </h1>
          <p className="font-lato text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Be the first to know when we launch and revolutionize how talent connects with opportunity.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className={`relative ${spacing.section} flex-1 flex items-center justify-center`}>
      <div className={spacing.container}>
        <div className="text-center max-w-5xl mx-auto">
          {/* Launch Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#ffd60a]/20 border border-[#ffd60a]/30 text-[#ffd60a] text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-center">{t('hero.badge')}</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8 px-2">
            {t('hero.title.part1')} <span ref={titleRef}>{t('hero.title.part2')}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            {t('hero.subtitle')}
          </p>
          
          {/* Mobile-optimized Video Player */}
          <div className="relative w-full mx-auto mb-8 sm:mb-12">
            {/* Mobile: smaller video container */}
            <div className="relative w-full aspect-video max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
              <div className="relative z-10 w-full h-full">
                <VideoPlayer 
                  src="/videos/channel.mp4"
                  className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden"
                  muted={false}
                />
              </div>
            </div>
          </div>
          
          {/* Mobile-optimized Email Collection */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4">
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="w-full max-w-md mx-auto">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('hero.form.placeholder')}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffd60a] focus:ring-2 focus:ring-[#ffd60a]/20 transition-all duration-300 text-sm sm:text-base"
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
                    className={`${buttons.primary} font-playfair px-6 sm:px-8 h-12 sm:h-[56px] text-base sm:text-lg rounded-xl w-full sm:w-auto ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    style={{ boxShadow: '0 8px 32px 0 rgba(0,24,61,0.18)' }}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-[#000814] border-t-transparent rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <>
                        <Bell className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        {t('hero.form.button')}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="w-full max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                  <span className="text-green-400 font-medium text-sm sm:text-base text-center">{t('hero.form.success')}</span>
                </div>
              </div>
            )}
            
            <p className="text-xs sm:text-sm max-w-sm text-center text-gray-400 px-2">
              {t('hero.socialProof')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 