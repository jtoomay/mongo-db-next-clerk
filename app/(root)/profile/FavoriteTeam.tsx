"use client"

import { Button } from "@/components/ui/button"
import { updateUser } from "@/lib/actions/user.actions"
import { useState } from "react"

interface FavTeamProps {
  defaultTeam?: string
}

export default function FavoriteTeam({ defaultTeam = "" }: FavTeamProps) {
  const [favoriteTeam, setFavoriteTeam] = useState(defaultTeam)
  const [loading, setLoading] = useState(false)

  console.log("Team", favoriteTeam)

  async function onSubmit() {
    setLoading(true)
    try {
      await updateUser({ favoriteTeam })
    } catch (err) {
      console.log("Error Message: ", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={Wrapper}>
      <span>Favorite Sports Team</span>
      <input
        className={InputStyles}
        placeholder="Enter your favorite team here..."
        value={favoriteTeam}
        onChange={(e) => setFavoriteTeam(e.target.value)}
      />
      <Button className={ButtonStyles} onClick={onSubmit}>
        Submit
      </Button>
    </div>
  )
}

const Wrapper = `flex gap-4 mt-4`
const InputStyles = `min-w-fit px-4 text-black`
const ButtonStyles = `bg-white rounded-xl text-black px-4 py-2 transition-colors duration-300 hover:bg-gray-200`
