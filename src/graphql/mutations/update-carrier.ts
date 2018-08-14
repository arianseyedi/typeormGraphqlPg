import { Carrier } from 'entities/carrier';
import { getRepository } from 'typeorm';


export const updateCarrierMutation = {
    async updateCarrier(_, { id, patch}) {
        const repository = getRepository(Carrier);
        const carrier = await repository.findOne(id);
        await repository.update(id, {...patch});
        return {
            ...carrier,
            ...patch
        }
    }
}