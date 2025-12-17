import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, Code, Megaphone, Bot, Workflow, Cog } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Beautiful, conversion-focused UI/UX designs that engage users and drive results.",
    href: "/services",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Full-stack development with modern technologies, SEO-ready and scalable.",
    href: "/services",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, social media marketing, paid ads, and branding strategies that grow your reach.",
    href: "/services",
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description: "Intelligent AI agents for customer support, calling, and automated interactions.",
    href: "/ai-solutions",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Streamline your business processes with custom AI-powered automation solutions.",
    href: "/ai-solutions",
  },
  {
    icon: Cog,
    title: "Custom Software",
    description: "Tailored software solutions built to address your unique business challenges.",
    href: "/services",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-accent tracking-wider uppercase">What We Offer</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Comprehensive Digital Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From design to development, marketing to AI automation—we deliver end-to-end solutions that transform your
            digital presence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full bg-secondary/50 border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-accent">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
