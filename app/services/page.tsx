import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Search, Share2, BarChart3, Palette, Smartphone, ArrowRight, Check } from "lucide-react"

export const metadata = {
  title: "Services | ModernWeb Solutions",
  description:
    "Comprehensive digital services including website design, development, digital marketing, and custom software solutions.",
}

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "Create stunning, user-centric designs that captivate your audience and drive conversions.",
    features: [
      "Custom UI/UX design",
      "Responsive layouts for all devices",
      "Conversion-optimized interfaces",
      "Brand-consistent visual identity",
      "Interactive prototypes",
    ],
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Build fast, secure, and scalable websites using modern technologies and best practices.",
    features: [
      "Full-stack development",
      "Next.js & React expertise",
      "SEO-optimized architecture",
      "Performance optimization",
      "API integrations",
    ],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensure your website looks and works perfectly on every device, from mobile to desktop.",
    features: [
      "Mobile-first approach",
      "Cross-browser compatibility",
      "Touch-friendly interfaces",
      "Adaptive layouts",
      "Progressive web apps",
    ],
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Improve your search rankings and drive organic traffic with comprehensive SEO strategies.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page optimization",
      "Content optimization",
      "Performance monitoring",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with your audience across social platforms.",
    features: [
      "Social media strategy",
      "Content creation",
      "Community management",
      "Influencer partnerships",
      "Analytics & reporting",
    ],
  },
  {
    icon: BarChart3,
    title: "Paid Advertising",
    description: "Maximize your ROI with targeted advertising campaigns across multiple platforms.",
    features: [
      "Google Ads management",
      "Social media advertising",
      "Retargeting campaigns",
      "A/B testing",
      "Conversion tracking",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium text-accent tracking-wider uppercase">Our Services</p>
              <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Digital Services That Drive Growth
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                From concept to launch, we provide comprehensive digital solutions tailored to your business needs.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="bg-card border-border hover:border-accent/50 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                        <p className="mt-2 text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold text-foreground">Ready to get started?</h2>
              <p className="mt-4 text-muted-foreground">
                {"Let's discuss your project and find the perfect solution for your business."}
              </p>
              <Button size="lg" asChild className="mt-8 group">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
