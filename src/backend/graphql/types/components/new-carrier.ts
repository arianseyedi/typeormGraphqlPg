//
// graphql/types/new-card-patch.ts
//
export const NewCarrierPatch = `
    input NewCarrierPatch {
        name        : String!
        email       : String!
        address     : String!
        trucks      : [NewTruckPatch]!
        customers   : [CustomerHint]
    }`;
