export const Mutation = `
    type Mutation {
        toggleCard (
            id: String!
        ): Card
        
        # add mutation definition here
        updateCard (
            id: String!
            patch: CardPatch!
        ): Card
    }
`;