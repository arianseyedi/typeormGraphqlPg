//
// graphql/types/new-card-patch.ts
//
export const NewCustomerPatch = `
    input NewCustomerPatch {
        name        : String!
        email       : String!
        address     : String!
        todo        : CardPatch
    }`;
