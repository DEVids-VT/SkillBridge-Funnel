import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Contact Us",
  description: "Get in touch with the SkillBridge team",
  keywords: ["Contact", "SkillBridge", "Support", "Get Started"],
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 mb-8">
            Ready to start your journey? Get in touch with our team to learn more about SkillBridge.
          </p>
          <div className="text-gray-400">
            Contact form and details coming soon.
          </div>
        </div>
      </div>
    </div>
  );
} 