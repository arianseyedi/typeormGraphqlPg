import { getRepository } from 'typeorm';
import { Card }          from 'backend/entities/card';

export const updateCardMutation = {
    async updateCard(_, { id, patch }) {
        const repository = getRepository(Card);
        const card = await repository.findOne({ id });
        await repository.update(id, {...patch});
        return {
            ...card,
            ...patch,
        };
    }
};
// FIXME: delete this method