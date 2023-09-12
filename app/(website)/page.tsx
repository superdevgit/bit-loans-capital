"use client";

import { Footer, Header } from "./components/layout";
import {
  CategoriesSection,
  CommunitySection,
  FeaturesSection,
  HeroSection,
  LoanCalculatorSection,
  ServicesSection,
} from "./components/sections";

// COMPONENTS ========================================

// ===================================================
// HOME PAGE COMPONENT (app/page.tsx) ================
// ===================================================
export default function Home() {
  // RETURN ==========================================
  return (
    <>
      <Header />
      <HeroSection />
      <main className="container w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%]">
        <FeaturesSection />

        <ServicesSection />
        <CategoriesSection />
        <LoanCalculatorSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}

// EXTENDED COMPONENTS =================================
