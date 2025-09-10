import { createMetadata } from "@/lib/seo/metadata";
import { spacing, layouts, typography } from '@/lib/design-system';

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore real-world projects from leading companies",
  keywords: ["Projects", "Internships", "SkillBridge", "Companies"],
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className={`${spacing.container} ${spacing.headerOffset}`}>
        <div className={layouts.pageHeader}>
          <div className={layouts.pageHeaderBackground} />
          <h1 className={layouts.pageTitle}>Projects</h1>
          <p className={layouts.pageDescription}>
            Explore real-world projects from leading companies and start your journey.
          </p>
          <div className={typography.body.default}>
            This page is coming soon as part of the SkillBridge platform.
          </div>
        </div>
      </div>
    </div>
  );
} 