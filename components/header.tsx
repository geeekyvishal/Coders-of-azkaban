"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import globe from "@/components/icons/globe.svg";

export default function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src={globe} alt="GeoRescue Logo" className="h-8 w-8" width={10} height={10}/>
          <span className="hidden font-bold sm:inline-block">
            GeoRescue
          </span>
        </Link>
        <div className="flex-1" />
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="mr-6"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}