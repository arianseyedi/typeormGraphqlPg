import { Truck } from './../../entities/truck';
import { getRepository } from 'typeorm';

export const trucksResolver = {
    async truck() {
        const repository = getRepository(Truck);
        return await repository.find({ relations: ['carrier']});
    }
}