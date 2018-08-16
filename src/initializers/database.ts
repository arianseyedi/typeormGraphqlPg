//
// initializers/database.ts
//
const path = require('path');
import { createConnection } from 'typeorm';
import { Card } from 'entities/card';


export const databaseInitializer = async () => {

    return await createConnection().then((connection) => {
        console.log('Database connection established');
    });
    console.log('Database connection ended');
};