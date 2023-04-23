import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import {UserType} from '../../types/user.type'
import {User} from '../../../models/user.model'
import userService from '../../../services/user.service';

export const getUsers = {
    type:GraphQLList(UserType), 
    async resolve(_, args){
        try {
            return await userService.getUsers()
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}

export const getUser = {
    type:UserType,
    args:{
        id:{type:GraphQLNonNull(GraphQLID)}
    },
    async resolve (_, args) {
        try {
            return await userService.getUserById(args.id)
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
} 