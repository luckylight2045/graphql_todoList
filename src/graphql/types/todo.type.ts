import { GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLString, GraphQLUnionType } from "graphql";
import {UserType} from './user.type'
import userService from "../../services/user.service";

const date1 = new Date()
type date = {
    dueDate:typeof date1
}

export const TodoTypeList = new GraphQLObjectType({
    name:"todoListType",
    description:"todoListType",
    fields:{
        id:{type:GraphQLNonNull((GraphQLID))},
        title:{type:GraphQLNonNull(GraphQLString)},
        status:{type:GraphQLBoolean},
        user:{type:UserType}
    }
})

export const TodoType = new GraphQLObjectType({
    name:"todoType",
    description:"todoType",
    fields:{
        id:{type:GraphQLNonNull((GraphQLID))},
        title:{type:GraphQLNonNull(GraphQLString)},
        status:{type:GraphQLBoolean},
        user:{type:UserType, async resolve(parent, args){
            try {
                console.log('todo')
                return await userService.getUserById(parent.user)
            } catch(err) {
                console.log(err.message)
                throw new Error(err.message)
            }
        }}
    }
})

export const TodoUpdate = new GraphQLInputObjectType({
    name:"todoUpdate",
    description:"todoUpdate",
    fields:{
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        status:{type:GraphQLBoolean}
    }
})