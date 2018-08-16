import { makeExecutableSchema } from 'graphql-tools';
import { Query }     from './types/queries'
import { types }     from './types'
import { resolvers } from './resolvers'
import { Mutation }  from './types/components/mutation';


const schemaDefinition = `
    schema {
        query: Query
        mutation : Mutation 
    }
`;

const typeDefs = [
    schemaDefinition,
    Query,
    Mutation,
    ...types,
];

export const schemas = makeExecutableSchema({
    typeDefs,
    resolvers,
});