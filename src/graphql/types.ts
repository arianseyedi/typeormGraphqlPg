import { CarrierPatch } from './types/carrier-patch';
import { CustomerPatch } from './types/customer-patch';

import { NewCardPatch } from './types/new-card-patch';
import { CardPatch } from './types/card-patch';
import { Card } from './types/card';
import { NewCustomerPatch } from './types/new-customer';
import { NewCarrierPatch } from './types/new-carrier';
import { Customer } from './types/customer';
import { Carrier } from './types/carrier';


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
