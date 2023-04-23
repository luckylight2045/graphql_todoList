import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
    name:"userType",
    description:"userType",
    fields:{
        id:{type:GraphQLNonNull(GraphQLID)},
        name:{type:GraphQLString},
        description:{type:GraphQLString}
    }
})