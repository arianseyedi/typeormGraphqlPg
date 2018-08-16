//
// initializers/database.ts
//
const path = require('path');
import { createConnection } from 'typeorm';
import { Card } from 'entities/card';


export const databaseInitializer = async () => {

    return await createConnection(
        // {
        //     type     : 'postgres',
        //     host     : 'localhost',
        //     port     : 5432,
        //     username : 'postgres',
        //     password : 'tester',
        //     database : 'test1',
        //     entities: [
        //         "src/entities/**/*.ts",
        //     ],
        //     logging: ['query', 'error'],
        //     synchronize: true,
        // }
    ).then((connection) => {
        console.log('Database connection established');
    });
    console.log('Database connection ended');
};