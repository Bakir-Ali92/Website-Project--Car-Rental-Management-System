import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section id="rent" className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl md:text-6xl font-semibold tracking-tight">
          Rent cars across Australia—fast, fair, and flexible
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Seamless bookings from Sydney to Perth. Professional fleet, transparent pricing, and 24/7 local support.
        </p>
      </Reveal>

      {/* Search stub */}
      <Reveal delay={100} className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
          <input
            aria-label="Pickup location"
            placeholder="Pickup location"
            className="h-11 rounded-md border bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          />
          <input
            aria-label="Pickup date"
            type="date"
            className="h-11 rounded-md border bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          />
          <input
            aria-label="Return date"
            type="date"
            className="h-11 rounded-md border bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          />
          <Button className="h-11">Search</Button>
        </div>
      </Reveal>

      {/* Portals */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Reveal as={Card} className="group hover:translate-y-[-2px] transition-transform">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              For drivers
              <span className="text-sm text-muted-foreground">User Portal</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Book a car in minutes with flexible pickup and fair pricing.
            </p>
            <Button asChild>
              <Link href="/rent">Rent a car</Link>
            </Button>
          </CardContent>
        </Reveal>

        <Reveal delay={100} as={Card} className="group hover:translate-y-[-2px] transition-transform">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              For businesses
              <span className="text-sm text-muted-foreground">Admin Portal</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">View insights, manage fleet and reservations in real time.</p>
            <Button asChild variant="outline">
              <Link href="/admin">Open admin</Link>
            </Button>
          </CardContent>
        </Reveal>
      </div>
    </section>
  )
}
