import mongoose from "mongoose"

let isConnected = false

export const connectToDB = async () => {
  //Mongoose will only allow query filters to match fields that are defined in the schema. 
  //If a query filter matches a field that is not defined in the schema, Mongoose will throw an error.
  mongoose.set("strictQuery", true) 

  if (!process.env.MONGODB_URL) return console.log("Missing URL") // If you dont have a mongoDB url in the .env, log that theres a missing url
  if (isConnected) return console.log("Already Connected") // If it is already connected when we call this, dont try to connect again 
  try {
    await mongoose.connect(process.env.MONGODB_URL) // connect to the DB
    console.log("MongoDB Connected")
  } catch (err: any) {
    console.log("ERROR MESSAGE:", err)
  }
}
