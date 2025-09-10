import Image from 'next/image';
import Link from 'next/link';
import { companiesData } from './companiesData';
import { layouts, spacing } from '@/lib/design-system';
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Partner Companies",
  description: "Meet our partner companies and discover opportunities",
  keywords: ["Companies", "Partners", "SkillBridge", "Opportunities"],
});

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className={`${spacing.container} ${spacing.headerOffset}`}>
        <div className={layouts.pageHeader}>
          <div className={layouts.pageHeaderBackground} />
          <h1 className={layouts.pageTitle}>Our Partners</h1>
          <p className={layouts.pageDescription}>
            Meet our trusted partner companies and explore opportunities for your career growth.
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {companiesData.map((company) => (
            <Link
              key={company.id}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-square bg-[#003566]/80 rounded-xl border-2 border-[#003566] hover:border-[#ffd60a] transition-all duration-300 hover:scale-105 overflow-hidden">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 