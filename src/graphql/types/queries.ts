//
// graphql/types/query.ts
//

export const Query = `
    type Query {
        cards: [Card]
        card(id: String!): Card
        customer(id: String!): Customer
        customers: [Customer]
        carrier(id: String!): Carrier
        carriers: [Carrier]
        truck(id: String!): Truck
        trucks: [Truck]
    }
`;