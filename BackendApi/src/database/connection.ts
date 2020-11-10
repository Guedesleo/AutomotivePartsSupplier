// const knex = require('knex');
// const configuration = require('../../../Knexfile');


// const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

// const connection = knex(config);

// module.exports = connection;

import knex from 'knex';
import path from 'path';
  
const connection = knex({
    client : 'sqlite3',
    connection:{
        filename: path.resolve(__dirname , 'carAuto.sqlite')
    },
    useNullAsDefault : true,
});

export default connection;