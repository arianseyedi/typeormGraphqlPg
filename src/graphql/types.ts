import { CarrierPatch } from './types/components/carrier-patch';
import { CustomerPatch } from './types/components/customer-patch';

import { NewCardPatch } from './types/components/new-card-patch'
import { CardPatch } from './types/components/card-patch'
import { Card } from './types/components/card';
import { NewCustomerPatch } from './types/components/new-customer';
import { NewCarrierPatch } from './types/components/new-carrier';
import { Customer } from './types/components/customer';
import { Carrier } from './types/components/carrier';
import { NewTruckPatch } from './types/components/new-truck-patch'
import { TruckPatch } from './types/components/truck-patch'
import { Truck } from './types/components/truck'
import { CustomerHint } from './types/components/customer-hint';


export const types = [
    Card,
    CardPatch,
    NewCardPatch,
    Customer,
    CustomerHint,
    CustomerPatch,
    NewCustomerPatch,
    Carrier,
    CarrierPatch,
    NewCarrierPatch,
    Truck,
    TruckPatch,
    NewTruckPatch
];
