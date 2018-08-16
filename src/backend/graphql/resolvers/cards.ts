import { getRepository } from 'typeorm';
import { Card }          from 'backend/entities/card';

export const cardsResolver = {
    async cards() {
        const repository = getRepository(Card);
        return await repository.find({ relations: ['customer'] });
    }
};