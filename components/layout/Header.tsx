import { UserButton } from "@clerk/nextjs"
import React from "react"

export default function Header() {
  return (
    <header className="p-4 flex bg-blue-300 justify-between sticky top-0 left-0 right-0">
      <h1 className="text-lg font-semibold">Jakes App</h1>
      <UserButton afterSignOutUrl="/landing" />
    </header>
  )
}
