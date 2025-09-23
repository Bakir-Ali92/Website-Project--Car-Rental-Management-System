import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { FleetGrid } from "@/components/fleet-grid"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <FeatureCards />
      </section>
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <FleetGrid />
      </section>
      <SiteFooter />
    </main>
  )
}
