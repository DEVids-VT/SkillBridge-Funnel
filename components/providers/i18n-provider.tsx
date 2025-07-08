'use client';

import { useEffect, useState } from 'react';
import '@/lib/i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize i18n on client side
    import('@/lib/i18n').then(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) {
    return <div>{children}</div>;
  }

  return <>{children}</>;
} 