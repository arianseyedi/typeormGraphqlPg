import { getRepository } from 'typeorm';
import { Card }          from 'entities/card';

interface cardInput {
    title: String;
    description: String;
    done: Boolean;
}
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