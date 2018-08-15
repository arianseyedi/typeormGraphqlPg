//
// initializers/database.ts
//
const path = require('path');
import { createConnection } from 'typeorm';
import { Card } from 'entities/card';


export const databaseInitializer = async () => {

    return await createConnection({
        type     : 'postgres',
        host     : 'localhost',
        port     : 5432,
        username : 'postgres',
        password : 'tester',
        database : 'test1',
        entities: [
            "src/entities/**/*.ts",
        ],
        logging: ['query', 'error'],
        synchronize: true,
    }).then((connection) => {
        console.log('Database connection established');
        
        // // Create new instance
        // const card = new Card();
        // card.title = 'First card';
        // card.done  = false;
        
        // // Persist to database
        // return connection.manager
        //     .save(card)
        //     .then(card => {
        //         console.log('card saved');
        //     })
    });

};