import {Todo} from '../models/todo.model'

const todoService = {
    addTodo:async (args, user) => {
        try {
            const newTodo = await Todo.create({
                title:args.title,
                status:false,
                user
            })
            return newTodo
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    },

    getTodos:async () => {
        try {
            return await Todo.find({}).populate('user')
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    },

    editTodo:async (args) => {
        try {
            const todo = await Todo.findOneAndUpdate(args.id, args.input)
            return todo
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    },

    deleteTodo:async(args) => {
        try {
            return await Todo.findByIdAndDelete({_id:args.id})
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}

export default todoService