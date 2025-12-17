const clients = ["TechStart Inc.", "GrowthLab", "ScaleUp Co.", "InnovateTech", "FutureVision", "DataDriven"]

export function ClientsSection() {
  return (
    <section className="py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by innovative companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <span key={client} className="text-lg font-semibold text-muted-foreground/60">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
