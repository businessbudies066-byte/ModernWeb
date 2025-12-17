import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

const footerNavigation = {
  services: [
    { name: "Website Design", href: "/services" },
    { name: "Website Development", href: "/services" },
    { name: "Digital Marketing", href: "/services" },
    { name: "AI Solutions", href: "/ai-solutions" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Founders", href: "/founders" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ModernWeb Solutions Logo"
                width={36}
                height={36}
                className="rounded-md"
                priority
              />
              <span className="text-lg font-semibold text-foreground">
                ModernWeb
              </span>
            </Link>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Smart Web & AI Solutions to scale your business faster. We help
              startups, SMEs, and enterprises transform digitally.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="https://www.instagram.com/modernweb_sol?igsh=MTBpeGJtaWk0dXZiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ModernWeb Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                modernweb007@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +91 8503966315
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                Jaipur, Rajasthan, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ModernWeb Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
