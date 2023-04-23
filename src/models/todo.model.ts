import mongoose from '../../mongoose'
import {User} from './user.model'

const todoSchema = new mongoose.Schema({
    title:String,
    status:Boolean,
    user:{type:mongoose.Types.ObjectId, ref:User}
})

export const Todo = mongoose.model('Todo', todoSchema)