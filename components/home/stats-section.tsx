const stats = [
  { value: "2+", label: "Projects Delivered" },
  { value: "1+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2+", label: "Years Experience" },
]

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-accent lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
