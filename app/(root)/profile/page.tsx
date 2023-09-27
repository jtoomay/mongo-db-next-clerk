import { auth, currentUser } from "@clerk/nextjs"
import Bio from "./Bio"
import { getUser } from "@/lib/actions/user.actions"
import FavoriteTeam from "./FavoriteTeam"

export default async function page() {
  const user = await getUser()

  return (
    <div>
      <Bio defaultBio={user.bio} />
      <FavoriteTeam defaultTeam={user.favoriteTeam} />
    </div>
  )
}
