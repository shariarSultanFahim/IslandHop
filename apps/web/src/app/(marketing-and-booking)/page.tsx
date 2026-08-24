import {
  FaqSupportBanner,
  FinalCtaSection,
  HeroSection,
  HowItWorksSection,
  ManageBookingSection,
  OperatorPlatformSection,
  PopularJourneysSection,
  ValuePropositionsSection
} from "@/components/widgets";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col space-y-10 overflow-x-hidden">
      {/* 1. Hero Section with booking search widget */}
      <HeroSection />

      {/* 2. Key Value Propositions Strip */}
      <ValuePropositionsSection />

      {/* 3. Popular Journeys Grid */}
      <PopularJourneysSection />

      {/* 4. How It Works (Step-by-step with mobile preview) */}
      <HowItWorksSection />

      {/* 5. Manage Your Booking Widget */}
      <ManageBookingSection />

      {/* 6. Ferry Operator Platform Section */}
      <OperatorPlatformSection />

      {/* 7. Questions / Support Banner */}
      <FaqSupportBanner />

      {/* 8. Ocean CTA Section */}
      <FinalCtaSection />
    </div>
  );
}
