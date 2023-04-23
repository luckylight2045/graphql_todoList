import { User } from "../models/user.model"

const userService = {
    addUser:async (args) => {
        try {
            const user = await User.create({
                name:args.name,
                description:args.description
            }) 
            return user
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    },

    getUsers:async () => {
        try {
            return await User.find({})
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    },

    getUserById:async (id) => {
        try {
            return await User.findById(id)
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}


export default userService 