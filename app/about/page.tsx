import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "About SkillBridge",
  description: "Learn more about SkillBridge and our mission to bridge the gap between education and career",
  keywords: ["About", "SkillBridge", "Mission", "Education", "Career"],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About SkillBridge</h1>
          <p className="text-xl text-gray-300 mb-8">
            We bridge the gap between education and career by connecting students with real-world projects from leading companies.
          </p>
          <div className="text-gray-400">
            This page is coming soon with more details about our mission and platform.
          </div>
        </div>
      </div>
    </div>
  );
} 