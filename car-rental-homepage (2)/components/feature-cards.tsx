import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const features = [
  {
    title: "Australia‑wide coverage",
    desc: "Pick up and drop off across major cities and airports.",
  },
  {
    title: "Flexible booking",
    desc: "Free cancellation up to 24 hours before pickup.",
  },
  {
    title: "24/7 local support",
    desc: "Real humans ready to help—day or night.",
  },
]

export function FeatureCards() {
  return (
    <div aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-balance text-2xl md:text-3xl font-semibold mb-6">
        Why drive with AussieCar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 80} as={Card} className="hover:shadow-sm transition-shadow">
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{f.desc}</CardContent>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
