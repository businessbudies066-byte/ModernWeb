import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-secondary/50 border border-border px-6 py-16 sm:px-16 lg:px-24 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {
                "Let's discuss how our web and AI solutions can help you achieve your goals. Get a free consultation today."
              }
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ai-solutions">Explore AI Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
