'use client';

import { effects } from '@/lib/design-system';
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  HowItWorksSection,
  FAQSection,
  FinalCTASection
} from './components';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden" style={{ background: effects.gradients.hero }}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`${effects.blurBlobs.blue} top-1/4 left-1/4 animate-pulse`} />
        <div className={`${effects.blurBlobs.yellow} bottom-1/4 right-1/4 animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  );
} 