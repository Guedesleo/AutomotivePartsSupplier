module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './BackendApi/src/database/carAuto.sqlite'
      },
      migrations : {
        directory : './BackendApi/src/database/migrations',
      },
      seeds: {
        directory: './BackendApi/src/database/seeds',
      },
      useNullAsDefault : true
    },
  
    test: {
      client: 'sqlite3',
      connection: {
        filename: './src/database/carAutoTest.sqlite'
      },
      migrations : {
        directory : './src/database/migrations'
      },
      seeds: {
        directory: './src/database/seeds',
      },
      useNullAsDefault : true
    },
}   