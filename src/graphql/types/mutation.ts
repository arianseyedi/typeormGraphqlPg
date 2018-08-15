export const Mutation = `
    type Mutation {
        toggleCard (
            id: String!
        ): Card
        
        updateCard (
            id: String!
            patch: CardPatch!
        ): Card

        createCard (
            card: NewCardPatch!
        ): Card

        updateCustomer (
            id: String!
            patch: CustomerPatch!
        ): Customer

        createCustomer (
            customer: NewCustomerPatch!
        ): Customer

        updateCarrier (
            id: String!
            patch: CarrierPatch!
        ): Carrier

        createCarrier (
            carrier: NewCarrierPatch!
        ): Carrier
    }`;
    // FIXME: truck...