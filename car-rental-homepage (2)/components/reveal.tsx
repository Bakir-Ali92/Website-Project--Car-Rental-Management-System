"use client"

import { useEffect, useRef, type PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

export function Reveal({
  as: Tag = "div",
  className,
  children,
  delay = 0,
}: PropsWithChildren<{ as?: any; className?: string; delay?: number }>) {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.setProperty("--reveal-delay", `${delay}ms`)
            el.classList.add("reveal-show")
            obs.disconnect()
          }
        })
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return (
    <Tag ref={ref as any} className={cn("reveal", className)}>
      {children}
    </Tag>
  )
}
