import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Hero Section with Background Image */}
        <div className="absolute inset-0">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Campus"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Header */}
        <header className="relative z-50">
          <div className="container flex h-20 items-center justify-between">
            <MobileNav />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center gap-4">
                {/* <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="IIIT Nagpur Logo"
                  width={64}
                  height={64}
                  className="h-16 w-16"
                /> */}
                {/* <h1 className="text-2xl font-bold text-white md:text-3xl">IIIT Nagpur</h1> */}
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center px-4">
          <div className="text-center">
            <h2 className="animate-in text-4xl font-bold text-white md:text-6xl">GeoRescue</h2>
            <p className="animate-in mt-4 max-w-2xl text-lg text-white/90 [animation-delay:200ms]">
            Relief at the Right Time, Help in the Right Place.            </p>
          </div>
        </div>
      </div>

      {/* Featured News Section */}
      <section className="bg-background py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Our Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="News"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Featured News Title {i}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

