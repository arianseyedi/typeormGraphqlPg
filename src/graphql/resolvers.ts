import { updateCustomerMutation } from 'graphql/mutations/update-customer';
import { toggleCardMutation } from "graphql/mutations/toggle-card";
import { cardResolver } from "graphql/resolvers/card";
import { cardsResolver } from "graphql/resolvers/cards";
import { updateCardMutation } from "graphql/mutations/update-card";
import { createCardMutation } from "graphql/mutations/create-card";
import { customersResolver } from "graphql/resolvers/customers";
import { carrierResolver } from "graphql/resolvers/carrier";
import { createCustomerMutation } from 'graphql/mutations/create-customer';
import { updateCarrierMutation } from 'graphql/mutations/update-carrier';
import { createCarrierMutation } from 'graphql/mutations/create-carrier';
import { carriersResolver } from 'graphql/resolvers/carriers';
import { customerResolver } from 'graphql/resolvers/customer';

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