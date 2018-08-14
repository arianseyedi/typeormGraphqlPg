import * as uuid from 'uuid/v4';
import { Customer } from 'entities/customer';
import { getRepository } from 'typeorm';


export const createCustomerMutation = {
    async createCustomer(_, { customer: attrs }) {
        const repository = getRepository(Customer)
        const customer = {
            id: uuid(),
            ...attrs,
        };
        await repository.save(customer);
        return customer;
    }
}