import { Truck } from 'entities/truck';
import * as uuid from 'uuid/v4';
import { Carrier } from 'entities/carrier';
import { getRepository, getConnection, getManager } from 'typeorm';
import { Customer } from 'entities/customer';

// complete
export const createCarrierMutation = {
    async createCarrier(_, { carrier: attrs }) {
        const carrierEntity = new Carrier();
        carrierEntity.id = uuid();
        carrierEntity.address = attrs.address;
        carrierEntity.email = attrs.email;
        carrierEntity.name = attrs.name;
        // prepare truck
        let trucksArr = []; // array to store trucks
        const { trucks } = attrs; // get all truck inputs
        trucks.forEach(truck => {
            const truckEntity = new Truck();
            truckEntity.id = uuid();
            truckEntity.model = truck.model;
            truckEntity.purchaseYear = truck.purchaseYear;
            truckEntity.carrier = truck.description;
            trucksArr.push(truckEntity); // populate the array of trucks
        });
        carrierEntity.trucks = trucksArr; // truck saved
        /**
         * For example, we have a Post entity and it has a
         * many-to-many relation to Category called categories. 
         * Let's add a new category to this many-to-many relation:

            import {getConnection} from "typeorm";

            await getConnection()
                .createQueryBuilder()
                .relation(Post, "categories")
                .of(post)
                .add(category);
         */
        
        // prepare customer
        console.log(attrs)
        let customersArr = []; // array to store customers
        const { customers } = attrs; // get all customer inputs
        customers.forEach(async customerHint => { // save each customer one by one
            const maybe_customer = await getManager()
                .findOne(Customer, 
                    {   
                        where: {
                            name: customerHint.name, 
                            email: customerHint.email
                        }
                    }
                )
            if (maybe_customer) {
                const repository = getRepository(Carrier)
                await repository.save(carrierEntity);
                const carrier = await getRepository(Carrier)
                    .findOne(
                        carrierEntity.id, 
                        { relations: ['customers']}
                    )
                console.log(maybe_customer)
                carrier.customers.push(maybe_customer) // customer saved
                await repository.save(carrier); // carrier saved
                return carrierEntity;
            }
        });
        return null;
    }
}
