import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  bio: String,
  firstName: String,
  lastName: String,
  username: String,
})

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User
