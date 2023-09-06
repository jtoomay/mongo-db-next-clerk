"use server"

import { auth, currentUser } from "@clerk/nextjs"
import { connectToDB } from "../mongoose"
import User from "../models/user.model"

export async function getUser() {
  connectToDB()
  const clerkUser = auth()
  const { firstName, lastName, username } = (await currentUser()) || {}
  try {
    const user = await User.findOne({ id: clerkUser.userId })
    if (user) return user

    return await User.create({ id: clerkUser.userId, firstName: firstName, lastName: lastName, username: username })
  } catch (err: any) {
    console.log("Error Message: ", err)
  }
}
interface UserUpdateOptions {
  bio?: string
  username?: string
}

export async function updateUser(options: UserUpdateOptions) {
  connectToDB()
  const clerkUser = auth()
  try {
    await User.findOneAndUpdate({ id: clerkUser.userId }, { $set: options }, { upsert: true })
  } catch (err) {
    console.log("Error Message: ", err)
  }
}
