export const CarrierPatch = `
    input CarrierPatch {
        name        : String
        email       : String
        address     : String
        trucks      : [TruckPatch]
    }`;
