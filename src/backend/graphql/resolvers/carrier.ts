import { Carrier } from 'backend/entities/carrier';
import { getRepository } from 'typeorm';

export const carrierResolver = {
    async carrier(obj, { id }, context, info) {
        const repository = getRepository(Carrier);
        return await repository.findOne(id, { relations: ['trucks', 'customers'] });
    }
}