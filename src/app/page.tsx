import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProductCategories } from "@/components/home/ProductCategories";
import { CompanyValue } from "@/components/home/CompanyValue";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProductionProcess } from "@/components/home/ProductionProcess";
import { RequestQuoteCTA } from "@/components/home/RequestQuoteCTA";

export default function Home() {
  return (
    <>
      {/* 2. Hero */}
      <Hero />

      {/* 3. Trust / Highlight Strip */}
      <TrustStrip />

      {/* 4. Product Categories */}
      <ProductCategories />

      {/* 5. Professional Production / Company Value */}
      <CompanyValue />

      {/* 6. Portfolio */}
      <PortfolioSection />

      {/* 7. Why Choose QEE BEE */}
      <WhyChooseUs />

      {/* 8. Production Process */}
      <ProductionProcess />

      {/* 9. Request Quote CTA */}
      <RequestQuoteCTA />
    </>
  );
}
