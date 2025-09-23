export function SiteFooter() {
  return (
    <footer id="about" className="mt-16 border-t">
      <div className="container mx-auto px-4 md:px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p>© {new Date().getFullYear()} AussieCar • Australia‑wide car rentals</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
