import { GraphQLList } from "graphql";
import { TodoType, TodoTypeList } from "../../types/todo.type";
import todoService from "../../../services/todo.service";

export const getTodos = {
    type:GraphQLList(TodoTypeList),
    async resolve(){
        try {
            return await todoService.getTodos()
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}