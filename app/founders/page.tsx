import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Quote } from "lucide-react"

export const metadata = {
  title: "Our Founders | ModernWeb Solutions",
  description: "Meet the visionary leaders behind ModernWeb Solutions - Piyush Jain and Sahil Choudhary.",
}

const founders = [
  {
    name: "Piyush Jain",
    role: "Co-Founder",
    bio: "Piyush is a seasoned technologist with over 2+ years of experience in web development and digital transformation. His passion for innovation and commitment to excellence has helped numerous businesses achieve their digital goals.",
    expertise: ["Full-Stack Development", "AI & Machine Learning", "System Architecture", "Business Strategy"],
    quote:
      "We believe technology should empower businesses, not complicate them. Our mission is to make cutting-edge digital solutions accessible to companies of all sizes.",
    linkedin: "https://www.linkedin.com/in/piyush-jain-a91a0b27b",
  },
  {
    name: "Sahil Choudhary",
    role: "Co-Founder",
    bio: "Sahil brings a unique blend of technical expertise and business acumen to ModernWeb Solutions. His vision for leveraging AI to solve real business challenges has positioned the company at the forefront of digital innovation.",
    expertise: ["AI Automation", "Digital Marketing", "Product Development", "Client Relations"],
    quote:
      "The future belongs to businesses that embrace intelligent automation. We're here to guide our clients through this transformation and help them thrive in the digital age.",
    linkedin: "#",
  },
]

export default function FoundersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium text-accent tracking-wider uppercase">Leadership</p>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Meet Our Founders
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Visionary leaders driving innovation and excellence in digital and AI solutions.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {founders.map((founder) => (
                <Card key={founder.name} className="border-border">
                  <CardContent className="p-8">
                    {/* Name & Role */}
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold">{founder.name}</h2>
                      <p className="text-accent font-medium">{founder.role}</p>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground leading-relaxed">
                      {founder.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider">
                        Areas of Expertise
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {founder.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-8 rounded-lg bg-secondary/50 p-6">
                      <Quote className="h-6 w-6 text-accent/50" />
                      <p className="mt-3 italic leading-relaxed">
                        “{founder.quote}”
                      </p>
                    </div>

                    {/* Social */}
                    <div className="mt-6">
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:text-accent transition-colors"
                        aria-label={`${founder.name} LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Vision */}
            <div className="mt-24 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Our Vision</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                Together, Piyush and Sahil founded ModernWeb Solutions with a shared vision: to democratize access to
                cutting-edge digital and AI technologies and help businesses scale smarter, faster, and better.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
