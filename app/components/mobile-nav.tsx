"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  {
    title: "Academics",
    items: [
      { title: "Programs", href: "/academics/programs" },
      { title: "Departments", href: "/academics/departments" },
      { title: "Faculty", href: "/academics/faculty" },
      { title: "Research", href: "/academics/research" },
    ],
  },
  {
    title: "Admissions",
    items: [
      { title: "Undergraduate", href: "/admissions/undergraduate" },
      { title: "Postgraduate", href: "/admissions/postgraduate" },
      { title: "International", href: "/admissions/international" },
      { title: "Financial Aid", href: "/admissions/financial-aid" },
    ],
  },
  {
    title: "Campus Life",
    items: [
      { title: "Housing", href: "/campus/housing" },
      { title: "Student Activities", href: "/campus/activities" },
      { title: "Sports", href: "/campus/sports" },
      { title: "Facilities", href: "/campus/facilities" },
    ],
  },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm border-r">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          {menuItems.map((section) => (
            <div key={section.title} className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
              <div className="grid gap-3">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

