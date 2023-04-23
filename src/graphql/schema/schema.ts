import { GraphQLObjectType, GraphQLSchema } from "graphql"
import {getUsers, getUser} from '../query/user/user.query'
import {addUser} from '../mutation/user/user.mutation'
import {addTodo, editTodo, deleteTodo} from '../mutation/todo/todo.mutation'
import {getTodos} from '../query/todo/todo.query'

const rootQuery = new GraphQLObjectType({
    name:"rootQuery",
    description:"rootQuery",
    fields:{
        getUsers,
        getUser,
        getTodos,
    }
})

const rootMutation = new GraphQLObjectType({
    name:"rootMutation",
    description:"rootMutation",
    fields:{
        addUser,
        addTodo,
        editTodo,
        deleteTodo
    }
})

const schema = new GraphQLSchema({
    query:rootQuery,
    mutation:rootMutation
})

export default schema 