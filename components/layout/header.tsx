'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { colors } from '@/lib/design-system';

export function Header() {
  const { t, i18n, ready } = useTranslation('header');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Current language
  const currentLanguage = isClient && i18n ? i18n.language || 'en' : 'en';
  const isEnglish = currentLanguage.startsWith('en');

  // Define navigation items to match SkillBridge SPA
  const navItems = [
    { to: '/companies', label: ready ? t('headerComponent.navigation.partners') : 'Partners' },
    { to: '/about', label: ready ? t('headerComponent.navigation.about') : 'About SkillBridge' },
  ];

  // Function to toggle between English and Bulgarian
  const toggleLanguage = () => {
    if (isClient && i18n) {
      const newLanguage = isEnglish ? 'bg' : 'en';
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <>
      {/* Beta Announcement Banner */}
      <div className="w-full" style={{ background: colors.blue, color: colors.white }}>
        <div className="py-2 text-center font-medium flex items-center justify-center gap-2">
          <span>{ready ? t('headerComponent.betaBanner.skillbridge') : 'SkillBridge'} </span>
          <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-extrabold bg-white text-blue-700 transform -rotate-6 border-2 border-white shadow-md relative hover:scale-110 transition-transform duration-300 animate-pulse" style={{ background: colors.white, color: colors.blue, border: `2px solid ${colors.white}` }}>
            <span className="absolute inset-0 rounded-md border" style={{ borderColor: colors.yellow, opacity: 0.5 }}></span>
            <span className="relative z-10 tracking-wider">{ready ? t('headerComponent.betaBanner.beta') : 'BETA'}</span>
          </span>
          <span>
            {ready ? t('headerComponent.betaBanner.message') : '- Get Early Access!'}
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center text-lg font-semibold text-white transition-colors hover:text-[#ffd60a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* Logo image - bigger size */}
              <img
                src="/images/logosmbms.png"
                alt={ready ? t('headerComponent.logo.alt') : 'SkillBridge Logo'}
                className="h-12 md:h-14"
              />
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className="text-sm font-medium text-white transition-colors hover:text-[#ffd60a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Controls: Language, Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Switcher Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium text-white hover:text-[#ffd60a] hover:bg-transparent"
              onClick={toggleLanguage}
            >
              {isEnglish ? (ready ? t('headerComponent.language.english') : 'EN') : (ready ? t('headerComponent.language.bulgarian') : 'БГ')}
            </Button>
            
            {/* Get Started Button */}
            <Button asChild className="bg-[#003566] hover:bg-[#001d3d] text-white">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full text-white hover:text-[#ffd60a] hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={ready ? t('headerComponent.navigation.toggleMenu') : 'Toggle menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg">
            <nav className="container mx-auto px-4 lg:px-8 flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-accent hover:text-[#ffd60a]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2">
                <Button asChild className="w-full bg-[#003566] hover:bg-[#001d3d] text-white">
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
} 