import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, Heart, Lightbulb, Users, Rocket, ArrowRight } from "lucide-react"

export const metadata = {
  title: "About Us | ModernWeb Solutions",
  description: "Learn about ModernWeb Solutions - our mission, vision, and values driving digital transformation.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology, constantly exploring new ways to solve complex challenges.",
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Your success is our success. We build lasting partnerships based on trust and mutual growth.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "We deliver nothing but the best, paying attention to every detail in everything we create.",
  },
  {
    icon: Rocket,
    title: "Results-Driven",
    description: "We focus on measurable outcomes that make a real impact on your business growth.",
  },
]

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "TensorFlow",
  "OpenAI",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "AWS",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-medium text-accent tracking-wider uppercase">About Us</p>
                <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
                  Building the Future of Digital Business
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  ModernWeb Solutions is a forward-thinking digital and AI agency dedicated to helping businesses thrive
                  in the digital age. Founded on the principles of innovation, excellence, and client success, we
                  deliver cutting-edge solutions that drive real results.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our team of experts combines deep technical expertise with business acumen to create solutions that
                  not only look great but also perform exceptionally. From stunning websites to intelligent AI
                  automation, we are your partner in digital transformation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-accent">2+</p>
                    <p className="mt-2 text-sm text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-accent">1+</p>
                    <p className="mt-2 text-sm text-muted-foreground">Happy Clients</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-accent">2+</p>
                    <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-accent">24/7</p>
                    <p className="mt-2 text-sm text-muted-foreground">Support Available</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To empower businesses of all sizes with innovative digital and AI solutions that drive growth,
                    efficiency, and competitive advantage. We strive to make cutting-edge technology accessible and
                    impactful for every client we serve.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To be the most trusted partner for digital transformation, known for delivering exceptional results
                    through innovative solutions. We envision a world where every business can harness the power of
                    modern technology to achieve their full potential.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-24">
              <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">Our Core Values</h2>
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <Card key={value.title} className="bg-card border-border text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                        <value.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-24">
              <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">Our Tech Stack</h2>
              <p className="mt-4 text-center text-muted-foreground">
                We use the latest technologies to build fast, scalable, and secure solutions.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-24 text-center">
              <h2 className="text-2xl font-bold text-foreground">Want to learn more about our team?</h2>
              <p className="mt-4 text-muted-foreground">Meet the visionary founders behind ModernWeb Solutions.</p>
              <Button size="lg" asChild className="mt-8 group">
                <Link href="/founders">
                  Meet Our Founders
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
