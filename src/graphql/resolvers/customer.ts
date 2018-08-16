import { Customer } from 'entities/customer';
import { getRepository } from 'typeorm';

export const customerResolver = {
    async customer(obj, { id }, context, info) {
        const repository = getRepository(Customer);
        return await repository.findOne(id, {relations: ['todo', 'carriers']});
    }
}