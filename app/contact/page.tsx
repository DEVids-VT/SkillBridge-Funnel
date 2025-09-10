import { createMetadata } from "@/lib/seo/metadata";
import Script from "next/script";

export const metadata = createMetadata({
  title: "Contact Us",
  description: "Get in touch with the SkillBridge team",
  keywords: ["Contact", "SkillBridge", "Support", "Get Started"],
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-playfair text-5xl font-bold mb-6">Book a 15‑Minute Demo</h1>
          <p className="text-xl text-gray-300">
            See how SkillBridge streamlines skills-based hiring for your team.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-2">
            <span>And get 1 month free</span>
            <div className="relative group">
              <span className="w-4 h-4 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                The demo is 100% free. Then you can claim 1 month free use of SkillBridge. Only pay for LLM token usage (typically up to $3 per scenario).
              </div>
            </div>
          </div>
        </div>
                {/* Fallback message for loading issues */}
                <div className="text-center mt-6 max-w-md mx-auto">
          <p className="text-sm text-gray-400 mb-2">
            Don't see the scheduling widget below?
          </p>
          <p className="text-xs text-gray-500">
            Try refreshing the page or visit{' '}
            <a 
              href="https://calendly.com/davidpetkov/15-minute-demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ffd60a] hover:text-[#ffc300] underline"
            >
              calendly.com/davidpetkov/15-minute-demo
            </a>
            {' '}directly
          </p>
        </div>
        {/* Calendly inline widget begin */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/davidpetkov/15-minute-demo"
          style={{ minWidth: "320px", height: "700px" }}
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        {/* Calendly inline widget end */}
      </div>
    </div>
  );
} 