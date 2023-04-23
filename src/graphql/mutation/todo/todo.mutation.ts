import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLUnionType } from 'graphql'
import {TodoType, TodoUpdate} from '../../types/todo.type'
import userService from '../../../services/user.service'
import todoService from '../../../services/todo.service'
import { Todo } from '../../../models/todo.model'

export const addTodo = {
    type:TodoType,
    args:{
        title:{type:GraphQLNonNull(GraphQLString)},
        userId:{type:GraphQLNonNull(GraphQLID)}
    },
    async resolve(_, args){
        try {
          const user =  await userService.getUserById(args.userId)
          if(user) {
              const newTodo = await todoService.addTodo(args, user)
              return newTodo
          }
          throw new Error('this user is not available')
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}

export const editTodo = {
    type:TodoType,
    args:{
        id:{type:GraphQLNonNull(GraphQLID)},
        input:{type:TodoUpdate}
    },
    async resolve(_, args){
        try {
            const todo = await todoService.editTodo(args)
            return todo 
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}

export const deleteTodo = {
    type:TodoType, 
    args:{
        id:{type:GraphQLNonNull(GraphQLID)}
    },
    async resolve(_, args){
        try {
            return await todoService.deleteTodo(args)
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}