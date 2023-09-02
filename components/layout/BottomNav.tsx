"use client"
import React from "react"
import { NavItems } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function BottomNav() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around">
      {NavItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link className={cn("bg-green-500", isActive && "bg-yellow-500")} href={item.href} key={item.href}>
            <Image alt={item.alt} src={item.icon} width={32} height={32} />
          </Link>
        )
      })}
    </nav>
  )
}
