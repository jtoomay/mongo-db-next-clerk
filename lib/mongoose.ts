import mongoose from "mongoose"

let isConnected = false

export const connectToDB = async () => {
  mongoose.set("strictQuery", true)

  if (!process.env.MONGODB_URL) return console.log("Missing URL")
  if (isConnected) return console.log("Already Connected")
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MongoDB Connected")
  } catch (err: any) {
    console.log("ERROR MESSAGE:", err)
  }
}
