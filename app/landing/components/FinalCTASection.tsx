'use client';

import Link from 'next/link';
import { spacing, typography, buttons } from '@/lib/design-system';
import { CheckCircle, Calendar } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className={`relative ${spacing.section} bg-gradient-to-r from-[#003566] to-[#001d3d]`}>
      <div className={spacing.container}>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`${typography.heading[2]} font-playfair mb-6`}>
            Ready to Stop Wasting Expert Time?
          </h2>
          <p className={`${typography.body.xl} mb-8`}>
            See how SkillBridge automates candidate testing and saves your company thousands in hiring costs
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-8">
            <Link 
              href="/contact" 
              className={`${buttons.primary} ${buttons.sizes.xl} inline-flex items-center gap-3`}
            >
              <Calendar className="w-5 h-5" />
              Book a 15-minute demo
            </Link>
            
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>And get 1 month free</span>
              <div className="relative group">
                <span className="w-4 h-4 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  The demo is 100% free. Then you can claim 1 month free use of SkillBridge. Only pay for LLM token usage (typically up to $3 per scenario).
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#ffd60a]" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#ffd60a]" />
              15-minute demo
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#ffd60a]" />
              Save 75% on hiring time
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#ffd60a]" />
              Instant candidate insights
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 