//
// graphql/types/new-card-patch.ts
//
export const NewTruckPatch = `
    input NewTruckPatch {
        model       : String!
        purchaseYear: String!
        carrier     : NewCarrierPatch
    }`;
