"use client"

import { Button } from "@/components/ui/button"
import { updateUser } from "@/lib/actions/user.actions"
import { useState } from "react"
interface BioProps {
  defaultBio?: string //? can be a string, or undefined
}
export default function Bio({ defaultBio = "" }: BioProps) {
  const [bio, setBio] = useState(defaultBio)
  const [loading, setLoading] = useState(false)

  async function onSubmit() {
    setLoading(true)
    try {
      await updateUser({ bio })
    } catch (err) {
      console.log("Error Message: ", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <textarea className="text-gray-900" value={bio} onChange={(e) => setBio(e.target.value)} />
      <Button onClick={onSubmit} className="w-full">
        {loading ? "Loading..." : "Update Bio"}
      </Button>
    </div>
  )
}
