import { GraphQLString } from 'graphql'
import {UserType} from '../../types/user.type'
import userService from '../../../services/user.service'

export const addUser = {
    type:UserType,
    args:{
        name:{type:GraphQLString},
        description:{type:GraphQLString}
    },
    async resolve(_, args) {
       try {
        return await userService.addUser(args)
       } catch(err) {
        console.log(err.message)
        throw new Error(err.message)
       }
    }
}