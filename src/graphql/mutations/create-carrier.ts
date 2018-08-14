import * as uuid from 'uuid/v4';
import { Carrier } from 'entities/carrier';
import { getRepository } from 'typeorm';


export const createCarrierMutation = {
    async createCarrier(_, { carrier: attrs }) {
        const repository = getRepository(Carrier)
        const carrier = {
            id: uuid(),
            ...attrs,
        };
        await repository.save(carrier);
        return carrier;
    }
}