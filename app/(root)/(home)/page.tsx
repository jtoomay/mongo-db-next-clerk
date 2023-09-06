import { getUser } from "@/lib/actions/user.actions"
import { UserButton } from "@clerk/nextjs"

export default async function Home() {
  const user = await getUser()
  return <div>{user.firstName + " " + user.lastName}</div>
}
