import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <address className="text-sm text-muted-foreground not-italic">
            IIIT Nagpur
            <br />
            Survey No. 140,141/1
            <br />
            Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni
            <br />
            Village - Waranga, PO - Dongargaon (Butibori)
            <br />
            Nagpur - 441108
            <br />
            Maharashtra, India
          </address>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/tenders" className="hover:text-foreground">
                Tenders
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/rti" className="hover:text-foreground">
                RTI
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/library" className="hover:text-foreground">
                E-Library
              </Link>
            </li>
            <li>
              <Link href="/academic-calendar" className="hover:text-foreground">
                Academic Calendar
              </Link>
            </li>
            <li>
              <Link href="/newsletters" className="hover:text-foreground">
                Newsletters
              </Link>
            </li>
            <li>
              <Link href="/student-corner" className="hover:text-foreground">
                Student Corner
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IIIT Nagpur. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

