import { updateCustomerMutation } from './mutations/update-customer';
import { toggleCardMutation } from "./mutations/toggle-card";
import { cardResolver } from "./resolvers/card";
import { cardsResolver } from "./resolvers/cards";
import { updateCardMutation } from "./mutations/update-card";
import { createCardMutation } from "./mutations/create-card";
import { customersResolver } from "./resolvers/customers";
import { carrierResolver } from "./resolvers/carrier";
import { createCustomerMutation } from './mutations/create-customer';
import { updateCarrierMutation } from './mutations/update-carrier';
import { createCarrierMutation } from './mutations/create-carrier';
import { carriersResolver } from './resolvers/carriers';
import { customerResolver } from './resolvers/customer';

//
// graphql/resolvers.ts
//
export const resolvers = {
    Query: {
        ...cardsResolver,
        ...cardResolver,
        ...customerResolver,
        ...customersResolver,
        ...carrierResolver,
        ...carriersResolver
    },
    
    Mutation: {
        ...toggleCardMutation,
        ...updateCardMutation,
        ...createCardMutation,

        ...updateCustomerMutation,
        ...createCustomerMutation,

        ...updateCarrierMutation,
        ...createCarrierMutation
    },
};