"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 h-14">
        <Link href="/" className="flex items-center gap-2" aria-label="AussieCar home">
          <span className="inline-block h-6 w-6 rounded-md bg-primary" aria-hidden="true" />
          <span className="font-semibold tracking-tight">AussieCar</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#rent" className="text-muted-foreground hover:text-foreground transition-colors">
            Rent
          </Link>
          <Link href="#fleet" className="text-muted-foreground hover:text-foreground transition-colors">
            Fleet
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="outline">
            <Link href="/admin" aria-label="Admin portal">
              Admin
            </Link>
          </Button>
          <Button asChild>
            <Link href="/rent" aria-label="Rent a car">
              Rent a car
            </Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i-[ ] block h-0.5 w-4 bg-foreground" />
          <span className="sr-only">Open Menu</span>
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link href="#rent" className="py-2">
              Rent
            </Link>
            <Link href="#fleet" className="py-2">
              Fleet
            </Link>
            <Link href="#about" className="py-2">
              About
            </Link>
            <div className="mt-2 flex gap-2">
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href="/admin">Admin</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/rent">Rent a car</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
