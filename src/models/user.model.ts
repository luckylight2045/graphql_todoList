import mongoose from '../../mongoose'

const userSchema = new mongoose.Schema({
    name:String,
    description:String
})

export const User = mongoose.model("User", userSchema)
