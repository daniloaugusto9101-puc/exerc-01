
require('dotenv').config() //da acesso as variaveis de ambiente dentro do aruqivo .env

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations' // diretório de destino do migration
    },
    seeds: {
      directory: '../seeds' // diretório de destino dos seedes
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Ignora a verificação do certificado SSL
      },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
