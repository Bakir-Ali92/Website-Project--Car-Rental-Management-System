import Image from "next/image"
import { Reveal } from "@/components/reveal"

const cars = [
  { name: "Compact", img: "/compact-car-on-road.jpg" },
  { name: "SUV", img: "/suv-in-outback.jpg" },
  { name: "Electric", img: "/electric-vehicle-charging.png" },
  { name: "Van", img: "/van-near-beach.jpg" },
]

export function FleetGrid() {
  return (
    <div id="fleet" aria-labelledby="fleet-heading">
      <h2 id="fleet-heading" className="text-balance text-2xl md:text-3xl font-semibold mb-6">
        Fleet highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cars.map((c, i) => (
          <Reveal key={c.name} delay={i * 70} className="group overflow-hidden rounded-lg border">
            <Image
              src={c.img || "/placeholder.svg"}
              alt={`${c.name} category vehicle`}
              width={480}
              height={320}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="p-3 flex items-center justify-between">
              <p className="font-medium">{c.name}</p>
              <span className="text-sm text-muted-foreground">From $49/day</span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Trust strip */}
      <Reveal delay={280} className="mt-10 rounded-lg border p-4 md:p-6">
        <p className="text-sm text-muted-foreground mb-3">Trusted by leading brands</p>
        <div className="flex items-center gap-6 opacity-80">
          <span className="h-6 w-20 rounded bg-muted" aria-hidden="true" />
          <span className="h-6 w-16 rounded bg-muted" aria-hidden="true" />
          <span className="h-6 w-24 rounded bg-muted" aria-hidden="true" />
          <span className="h-6 w-14 rounded bg-muted" aria-hidden="true" />
        </div>
      </Reveal>
    </div>
  )
}
