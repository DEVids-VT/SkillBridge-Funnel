'use client';

import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Footer() {
  const { t, ready } = useTranslation('layout');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: ready ? t('layoutPage.footer.socialLinks.github') : 'GitHub', icon: Github, href: '#' },
    { name: ready ? t('layoutPage.footer.socialLinks.linkedin') : 'LinkedIn', icon: Linkedin, href: '#' },
    { name: ready ? t('layoutPage.footer.socialLinks.twitter') : 'Twitter', icon: Twitter, href: '#' },
  ];

  return (
    <footer className="mt-auto border-t border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-white">
            &copy; {currentYear} {ready ? t('layoutPage.footer.appName') : 'SkillBridge'} -{' '}
            {ready ? t('layoutPage.footer.copyright') : 'All rights reserved'}
          </p>

          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild className="rounded-full hover:bg-transparent">
                <a
                  href={link.href}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-4 w-4 text-white transition-colors hover:text-[#ffd60a]" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 