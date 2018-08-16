import { getRepository } from 'typeorm';
import { Customer } from 'backend/entities/customer';


export const updateCustomerMutation = {
    async updateCustomer(_, { id, patch}) {
        const repository = getRepository(Customer);
        const customer = repository.findOne({ id });
        await repository.update(id, {...patch});
        return {
            ...customer,
            ...patch
        }
    }
}

// FIXME: Add Update todo and update carrier