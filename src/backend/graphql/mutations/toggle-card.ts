//
// graphql/mutations/toggle-card.ts
//
import { getRepository } from 'typeorm';
import { Card }          from 'backend/entities/card';


export const toggleCardMutation = {
    async toggleCard(_, { id }) {
        const repository = getRepository(Card);
        const card = await repository.findOne({ id });
        const done = !card.done; // key-val pair
        await repository.update(id, { done });
        return {
            ...card,
            done,
        };
    }
};
// FIXME: delete this method.