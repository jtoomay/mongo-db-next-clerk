"use server"

import { auth, currentUser } from "@clerk/nextjs"
import { connectToDB } from "../mongoose"
import User from "../models/user.model"

export async function getUser() {
  connectToDB() // connect to the DB
  const clerkUser = auth() // get the user from clerk authentication
  const { firstName, lastName, username } = (await currentUser()) || {} // get the name and username from the current clerk user, if there is none, create an empty object
  try {
    const user = await User.findOne({ id: clerkUser.userId }) // try to find this user in our DB using the user's name from clerk
    if (user) return user // return the user if we find them

    return await User.create({ id: clerkUser.userId, firstName: firstName, lastName: lastName, username: username }) // if not, create one with these props
  } catch (err: any) {
    console.log("Error Message: ", err)
  }
}
interface UserUpdateOptions { // these are the props that can be used to update the user.
  bio?: string
  username?: string
}

export async function updateUser(options: UserUpdateOptions) {
  connectToDB() // connect to the DB
  const clerkUser = auth() // get the user from Clerk
  try {
    await User.findOneAndUpdate({ id: clerkUser.userId }, { $set: options }, { upsert: true }) // Find and update the user with the clerk user id and set the other options that we pass in. 
  } catch (err) {
    console.log("Error Message: ", err)
  }
}
