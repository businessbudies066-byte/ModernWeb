import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Phone,
  MessageSquare,
  Users,
  Workflow,
  Brain,
  TrendingUp,
  Clock,
  Shield,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react"

export const metadata = {
  title: "AI Solutions | ModernWeb Solutions",
  description:
    "AI-powered automation solutions including AI agents, chatbots, CRM automation, and workflow optimization.",
}

const aiServices = [
  {
    icon: Phone,
    title: "AI Calling Agents",
    description:
      "Intelligent voice agents that handle customer calls 24/7, schedule appointments, and qualify leads automatically.",
    features: [
      "Natural conversation flow",
      "Multi-language support",
      "Call transcription & analytics",
      "CRM integration",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Smart chatbots that provide instant customer support, answer queries, and guide users through your services.",
    features: [
      "Natural language processing",
      "Context-aware responses",
      "Seamless human handoff",
      "Multi-platform deployment",
    ],
  },
  {
    icon: Users,
    title: "AI Lead Generation",
    description: "Automated lead capture and qualification systems that identify and nurture potential customers.",
    features: ["Smart lead scoring", "Automated follow-ups", "Behavioral analysis", "Pipeline optimization"],
  },
  {
    icon: Workflow,
    title: "CRM Automation",
    description: "Streamline your customer relationship management with AI-powered automation and insights.",
    features: ["Data entry automation", "Customer segmentation", "Predictive analytics", "Task automation"],
  },
  {
    icon: Brain,
    title: "Workflow Automation",
    description: "Automate repetitive business processes to save time and reduce errors across your organization.",
    features: ["Process mapping", "Custom integrations", "Error handling", "Performance monitoring"],
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description: "Bespoke AI applications designed to address your unique business challenges and opportunities.",
    features: ["Requirements analysis", "Custom model training", "Scalable architecture", "Ongoing optimization"],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "AI automation helps capture more leads and close more deals around the clock.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and let your team focus on high-value activities.",
  },
  {
    icon: Shield,
    title: "Reduce Errors",
    description: "AI systems provide consistent, accurate results every time.",
  },
]

export default function AISolutionsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium text-accent tracking-wider uppercase">AI Solutions</p>
              <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                AI-Powered Automation for Your Business
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Harness the power of artificial intelligence to automate workflows, enhance customer experiences, and
                drive business growth.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <benefit.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-24">
              <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">Our AI Services</h2>
              <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {aiServices.map((service) => (
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
                      <ul className="mt-6 grid grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-accent shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-24 rounded-3xl bg-secondary/50 border border-border px-8 py-16 text-center sm:px-16">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Ready to Automate Your Business?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {
                  "Let's explore how AI can transform your operations. Schedule a free consultation to discuss your automation needs."
                }
              </p>
              <Button size="lg" asChild className="mt-8 group">
                <Link href="/contact">
                  Schedule AI Consultation
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
