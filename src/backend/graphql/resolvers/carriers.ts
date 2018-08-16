import { getRepository } from 'typeorm';
import { Carrier } from 'backend/entities/carrier';

export const carriersResolver = {
    async carriers() {
        const repository = getRepository(Carrier);
        return await repository.find({ relations: ['trucks', 'customers'] });
    }
};