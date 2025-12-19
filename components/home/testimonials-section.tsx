import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "ModernWeb Solutions transformed our online presence completely. Their marketing team increased our customer engagement by 300%.",
    author: "Ashvini Sharma",
    role: "Manager, Chanakya News India Rajasthan",
  },
  {
    quote:
      "The team delivered a stunning website that perfectly captures our brand. Our conversion rates have never been better.",
    author: "Rohit Choudhary",
    role: "Owner, Cafe",
  },
  {
    quote:
      "The team helped us to get a website and an AI agent which helped us in several ways from booking appointments online to managing customer queries efficiently.",
    author: "Arnav Saini",
    role: "Owner, Salon",
  }

]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-accent tracking-wider uppercase">Testimonials</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">What Our Clients Say</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-secondary/50 border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent/50" />
                <p className="mt-4 text-foreground leading-relaxed">{`"${testimonial.quote}"`}</p>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
