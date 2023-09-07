import { getUser } from "@/lib/actions/user.actions"
import { UserButton } from "@clerk/nextjs"

export default async function Home() {
  const user = await getUser() // get the user from the database
  return <div>{user.firstName + " " + user.lastName}</div>
}
