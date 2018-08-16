//
// initializers/database.ts
//
import { createConnection } from 'typeorm';


export const databaseInitializer = async () => {

    return await createConnection().then((connection) => {
        console.log('Database connection established');
    });
    console.log('Database connection ended');
};