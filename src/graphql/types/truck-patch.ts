//
// graphql/types/new-card-patch.ts
//
export const TruckPatch = `
    input TruckPatch {
        model        : String!
        purchaseYear : String!
        carrier      : CarrierPatch
    }`;
