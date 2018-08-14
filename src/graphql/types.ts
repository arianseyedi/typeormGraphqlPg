import { CarrierPatch } from './types/carrier-patch';
import { CustomerPatch } from './types/customer';

import { NewCardPatch } from 'graphql/types/new-card-patch';
import { CardPatch } from 'graphql/types/card-patch';
import { Card } from 'graphql/types/card';
import { NewCustomerPatch } from 'graphql/types/new-customer';
import { NewCarrierPatch } from 'graphql/types/new-carrier';
import { Customer } from 'graphql/types/customer-patch';
import { Carrier } from 'graphql/types/carrier';


export const types = [
    Card,
    CardPatch,
    NewCardPatch,
    Customer,
    CustomerPatch,
    NewCustomerPatch,
    Carrier,
    CarrierPatch,
    NewCarrierPatch
];
