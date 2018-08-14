//
// graphql/types/card.ts
//

export const Card = `
    type Card {
        id          : String
        title       : String
        description : String
        done        : Boolean
        customer    : Customer
        created_at  : String
        updated_at  : String
    }
    `;