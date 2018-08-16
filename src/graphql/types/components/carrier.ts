export const Carrier = `
    type Carrier {
        id          : String
        name        : String
        email       : String
        address     : String
        trucks      : [Truck]
        customers   : [Customer]
        created_at  : String
        updated_at  : String
    }`;
// FIXME: truck...