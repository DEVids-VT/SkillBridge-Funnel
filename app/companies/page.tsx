import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Partner Companies",
  description: "Meet our partner companies and discover opportunities",
  keywords: ["Companies", "Partners", "SkillBridge", "Opportunities"],
});

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Partner Companies</h1>
          <p className="text-xl text-gray-300 mb-8">
            Meet our partner companies and discover amazing opportunities to grow your career.
          </p>
          <div className="text-gray-400">
            This page is coming soon as part of the SkillBridge platform.
          </div>
        </div>
      </div>
    </div>
  );
} 