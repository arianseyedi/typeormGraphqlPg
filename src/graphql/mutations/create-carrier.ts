import { Truck } from 'entities/truck';
import * as uuid from 'uuid/v4';
import { Carrier } from 'entities/carrier';
import { getRepository } from 'typeorm';

// complete
export const createCarrierMutation = {
    async createCarrier(_, { carrier: attrs }) {
        const repository = getRepository(Carrier)
        const carrierEntity = new Carrier();
        carrierEntity.id = uuid();
        carrierEntity.address = attrs.address;
        carrierEntity.email = attrs.email;
        carrierEntity.name = attrs.name;
        let trucksArr = []; // array to store trucks
        const { trucks } = attrs; // get all truck inputs
        trucks.forEach(truck => {
            // prepare truck
            const truckEntity = new Truck();
            truckEntity.id = uuid();
            truckEntity.model = truck.model;
            truckEntity.purchaseYear = truck.purchaseYear;
            truckEntity.carrier = truck.description;
            trucksArr.push(truckEntity); // populate the array of trucks
        });

        carrierEntity.trucks = trucksArr;
        await repository.save(carrierEntity);
        return carrierEntity;
    }
}