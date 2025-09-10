import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { spacing, layouts, typography, cards, buttons } from '@/lib/design-system';

export const metadata = createMetadata({
  title: "About SkillBridge | Stop Wasting Expert Time on Manual Candidate Testing",
  description:
    "SkillBridge saves medium and large companies thousands of hours by automating candidate test creation. Just specify job requirements and ideal candidate profile—our AI generates realistic work scenarios, manages candidates, and identifies your top 3 matches instantly.",
  keywords: [
    "automated candidate testing",
    "hiring automation software", 
    "skills-based hiring platform",
    "candidate assessment automation",
    "expert time savings hiring",
    "AI candidate matching",
    "recruitment cost reduction",
    "hiring efficiency software"
  ],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className={`${spacing.container} ${spacing.headerOffset}`}>
        {/* Hero */}
        <div className={layouts.pageHeader}>
          <div className={layouts.pageHeaderBackground} />
          <h1 className={layouts.pageTitle}>Stop Wasting Expert Time on Manual Testing</h1>
          <p className={layouts.pageDescription}>
            SkillBridge eliminates the biggest hidden cost in corporate hiring: expert time spent manually creating candidate tests. 
            Just define your job and ideal candidate—we handle everything else.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link href="/contact" className={`${buttons.primary} ${buttons.sizes.lg}`}>
              Book a free demo
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
        </div>

        {/* The Problem */}
        <section className={spacing.section}>
            <div className={layouts.sectionHeader}>
              <h2 className={layouts.sectionTitle}>The Expensive Problem Every Growing Company Faces</h2>
              <p className={layouts.sectionSubtitle}>
                Medium and large companies hiring regularly face a productivity drain that costs thousands per hire
              </p>
            </div>
            
            <div className="space-y-8">
              <div className={`${cards.base} p-6 md:p-8`}>
                <h3 className={`${typography.heading[4]} mb-4 text-[#ffd60a]`}>Your Senior Experts Become Test Creators</h3>
                <p className={typography.body.lg}>
                  Every time you need to hire, your most valuable people—senior developers, lead marketers, experienced analysts—stop doing their core work 
                  to manually craft candidate assessments. This process typically takes <strong>6-12 hours per role</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${cards.testimonial} text-center`}>
                  <h4 className={`${typography.heading[5]} mb-2`}>Time Cost Per Hire</h4>
                  <div className="text-3xl font-bold text-[#ffd60a] mb-2">6-12 hours</div>
                  <p className={typography.body.sm}>Expert time spent on manual test creation</p>
                </div>
                <div className={`${cards.testimonial} text-center`}>
                  <h4 className={`${typography.heading[5]} mb-2`}>Annual Cost (10 hires)</h4>
                  <div className="text-3xl font-bold text-[#ffd60a] mb-2">$15,000+</div>
                  <p className={typography.body.sm}>In lost productivity at $150/hour expert rate</p>
                </div>
              </div>

              <div className={`${cards.base} p-6 md:p-8`}>
                <h3 className={`${typography.heading[4]} mb-4 text-[#ffd60a]`}>The Hidden Costs Don't Stop There</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffd60a] mt-1">•</span>
                    <span><strong>Inconsistent assessments:</strong> Different experts create different tests, making candidate comparison impossible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffd60a] mt-1">•</span>
                    <span><strong>Candidate drop-off:</strong> 71% abandon lengthy, unclear processes—you lose your best prospects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffd60a] mt-1">•</span>
                    <span><strong>Delayed hiring:</strong> Manual evaluation slows decision-making while competitors move faster</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffd60a] mt-1">•</span>
                    <span><strong>Recruiter burnout:</strong> 82% of HR professionals report working beyond capacity on manual tasks</span>
                  </li>
                </ul>
              </div>
            </div>
        </section>

        {/* The Solution */}
        <section className={spacing.section}>
            <div className={layouts.sectionHeader}>
              <h2 className={layouts.sectionTitle}>How SkillBridge Works: Simple Input, Complete Solution</h2>
              <p className={layouts.sectionSubtitle}>
                Transform hours of expert work into a 5-minute setup
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className={`${cards.feature} flex items-start gap-6`}>
                <div className="w-12 h-12 bg-[#ffd60a] text-[#000814] rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className={`${typography.heading[4]} mb-3`}>You Provide Two Simple Inputs</h3>
                  <p className={typography.body.lg}>
                    Just give us your <strong>job description</strong> and describe your <strong>ideal candidate profile</strong>. 
                    That's it—no more hours spent crafting test scenarios.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`${cards.feature} flex items-start gap-6`}>
                <div className="w-12 h-12 bg-[#ffd60a] text-[#000814] rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className={`${typography.heading[4]} mb-3`}>SkillBridge Generates Complete Test Scenarios</h3>
                  <p className={typography.body.lg}>
                    Our AI creates realistic, job-relevant challenges—debug actual code, develop marketing strategies, analyze real datasets. 
                    <strong>No generic tests, only work that mirrors the actual role.</strong>
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`${cards.feature} flex items-start gap-6`}>
                <div className="w-12 h-12 bg-[#ffd60a] text-[#000814] rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className={`${typography.heading[4]} mb-3`}>Candidates Work in Our Platform</h3>
                  <p className={typography.body.lg}>
                    Candidates get dedicated profiles with clear assignments, progress tracking, and all necessary resources. 
                    No more confusion or drop-offs—they know exactly what to do and when.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className={`${cards.feature} flex items-start gap-6`}>
                <div className="w-12 h-12 bg-[#ffd60a] text-[#000814] rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className={`${typography.heading[4]} mb-3`}>AI Identifies Your Top 3 Matches</h3>
                  <p className={typography.body.lg}>
                    Our intelligent analyzer evaluates technical skills, problem-solving approach, and cultural fit against your ideal profile. 
                    <strong>Get your best candidates ranked with detailed reasoning—instantly.</strong>
                  </p>
                </div>
              </div>
            </div>
        </section>

        {/* Candidate Sources */}
        <section className={spacing.section}>
            <div className={layouts.sectionHeader}>
              <h2 className={layouts.sectionTitle}>Two Ways to Source Candidates</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={cards.feature}>
                <h3 className={`${typography.heading[4]} mb-3`}>Your Existing Candidates</h3>
                <p className={typography.body.default}>
                  Already have applicants? Send them directly to SkillBridge. They'll complete assessments in their dedicated profiles 
                  while you get comprehensive analysis without any manual work.
                </p>
              </div>
              <div className={cards.feature}>
                <h3 className={`${typography.heading[4]} mb-3`}>Our Talent Community</h3>
                <p className={typography.body.default}>
                  Make your assignment public and tap into our community of professionals actively seeking real-world challenges. 
                  Discover motivated talent from diverse backgrounds who want to prove their skills.
                </p>
              </div>
            </div>
        </section>

        {/* ROI Section */}
        <section className={spacing.section}>
            <div className={layouts.sectionHeader}>
              <h2 className={layouts.sectionTitle}>Your ROI: Stop Burning Money on Manual Processes</h2>
              <p className={layouts.sectionSubtitle}>
                See exactly how much SkillBridge saves your company
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className={`${cards.testimonial} text-center`}>
                <h3 className={`${typography.heading[5]} mb-2 text-[#ffd60a]`}>75% Time Savings</h3>
                <p className={typography.body.default}>
                  From 8 hours of expert time to 30 minutes of setup per role
                </p>
              </div>
              <div className={`${cards.testimonial} text-center`}>
                <h3 className={`${typography.heading[5]} mb-2 text-[#ffd60a]`}>$12,000+ Saved</h3>
                <p className={typography.body.default}>
                  Annual savings for companies hiring 10+ roles (at $150/hour expert rate)
                </p>
              </div>
              <div className={`${cards.testimonial} text-center`}>
                <h3 className={`${typography.heading[5]} mb-2 text-[#ffd60a]`}>40% Faster Hiring</h3>
                <p className={typography.body.default}>
                  Automated analysis eliminates evaluation delays
                </p>
              </div>
            </div>

            <div className={`${cards.base} p-8`}>
              <h3 className={`${typography.heading[4]} mb-4 text-center`}>Additional Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`${typography.heading[5]} mb-2`}>Higher Quality Hires</h4>
                  <p className={typography.body.default}>
                    Skills-based evaluation predicts job success 88.8% better than resume screening
                  </p>
                </div>
                <div>
                  <h4 className={`${typography.heading[5]} mb-2`}>Better Retention</h4>
                  <p className={typography.body.default}>
                    30% improvement in new hire retention when using capability-based assessments
                  </p>
                </div>
                <div>
                  <h4 className={`${typography.heading[5]} mb-2`}>Consistent Evaluation</h4>
                  <p className={typography.body.default}>
                    Standardized scenarios eliminate bias and enable fair candidate comparison
                  </p>
                </div>
                <div>
                  <h4 className={`${typography.heading[5]} mb-2`}>Improved Employer Brand</h4>
                  <p className={typography.body.default}>
                    Realistic, respectful assessments create positive candidate experiences
                  </p>
                </div>
              </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className={`${spacing.section} text-center`}>
            <h2 className={layouts.sectionTitle}>Ready to Stop Wasting Expert Time?</h2>
            <p className={layouts.sectionSubtitle}>
              See how SkillBridge can save your company thousands of hours and dollars in hiring costs
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              <Link href="/contact" className={`${buttons.primary} ${buttons.sizes.xl}`}>
                Book a free demo
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
        </section>
      </div>
    </div>
  );
}