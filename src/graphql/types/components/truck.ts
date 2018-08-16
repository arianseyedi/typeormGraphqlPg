//
// graphql/types/card.ts
//

export const Truck = `
    type Truck {
        id          : String
        model       : String
        purchaseYear: String
        carrier     : Carrier
        created_at  : String
        updated_at  : String
    }`;