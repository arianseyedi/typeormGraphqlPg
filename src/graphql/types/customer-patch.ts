export const CustomerPatch = `
    input CustomerPatch {
        name        : String
        email       : String
        address     : String
        todo        : CardPatch
    }`;