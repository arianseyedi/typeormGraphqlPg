import { Card } from 'entities/card';
import * as uuid from 'uuid/v4';
import { Customer } from 'entities/customer';
import { getRepository } from 'typeorm';


export const createCustomerMutation = {
    async createCustomer(_, { customer: attrs }) {
        const repository = getRepository(Customer)
        const customerEntity = new Customer();
        const todoEntity = new Card();
        todoEntity.id = uuid();
        const { todo } = attrs;
        // prepare customer   
        let customer = {
            id: uuid(),
            ...attrs
        };
        customerEntity.id = customer.id;
        customerEntity.address = customer.address;
        customerEntity.email = customer.email;
        customerEntity.name = customer.name;
        // prepare todo
        todoEntity.title = todo.title;
        todoEntity.done = todo.done;
        todoEntity.description = todo.description;

        customerEntity.todo = todoEntity;
        await repository.save(customerEntity);
        return customer;
    }
}