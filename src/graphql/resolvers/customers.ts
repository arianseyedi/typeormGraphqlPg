import { Customer } from 'entities/customer';
import { getRepository } from 'typeorm';

export const customersResolver = {
    async customers() {
        const repository = getRepository(Customer);
        return await repository.find({ relations: ['todo'] });
    }
};