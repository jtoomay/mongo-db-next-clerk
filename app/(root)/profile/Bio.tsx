"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
interface BioProps {
  defaultBio?: string //? can be a string, or undefined
}
export default function Bio({ defaultBio = "" }: BioProps) {
  const [bio, setBio] = useState(defaultBio)

  function onSubmit() {}

  return (
    <div className="flex flex-col gap-4">
      <textarea className="text-gray-900" value={bio} onChange={(e) => setBio(e.target.value)} />
      <Button className="w-full">Update Bio</Button>
    </div>
  )
}
