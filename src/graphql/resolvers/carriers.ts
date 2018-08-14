//
// graphql/resolvets/carriers.ts
//

import { getRepository } from 'typeorm';
import { Carrier }          from 'entities/carrier';


export const carriersResolver = {
    async carriers() {
        const repository = getRepository(Carrier);
        return await repository.find();
    }
};