import { Truck } from 'entities/truck'
import { getRepository } from 'typeorm';

export const truckResolver = {
    async truck(obj, { id }, context, info) {
        const repository = getRepository(Truck);
        return await repository.findOne(id, { relations: ['carrier']});
    }
}