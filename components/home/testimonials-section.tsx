import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "ModernWeb Solutions transformed our online presence completely. Their AI chatbot increased our customer engagement by 300%.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    quote:
      "The team delivered a stunning website that perfectly captures our brand. Our conversion rates have never been better.",
    author: "Michael Chen",
    role: "Founder, GrowthLab",
  },
  {
    quote:
      "Their digital marketing expertise helped us reach new markets we never thought possible. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Marketing Director, ScaleUp Co.",
  },
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
