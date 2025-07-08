import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore real-world projects from leading companies",
  keywords: ["Projects", "Internships", "SkillBridge", "Companies"],
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore real-world projects from leading companies and start your journey.
          </p>
          <div className="text-gray-400">
            This page is coming soon as part of the SkillBridge platform.
          </div>
        </div>
      </div>
    </div>
  );
} 