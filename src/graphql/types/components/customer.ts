export const Customer = `
    type Customer {
        id          : String
        name        : String
        email       : String
        address     : String
        todo        : Card
        carriers    : [Carrier]
        created_at  : String
        updated_at  : String    
    }`;