import * as uuid from 'uuid/v4';

import { getRepository } from 'typeorm';
import { Card } from 'backend/entities/card';


export const createCardMutation = {
    async createCard(_, { card: attrs }) {
        const repository = getRepository(Card);
        const card = {
            id: uuid(),
            ...attrs,
        };
        await repository.save(card);
        return card;
    }
};
// FIXME: delete this method