/* eslint-disable no-console */

const { MongoClient } = require('mongodb');

const init = (connectionString) => {
   // const uri = 'mongodb://Lamma:<PASSWORD>@find-roommate-shard-00-00-0hbmm.mongodb.net:27017,find-roommate-shard-00-01-0hbmm.mongodb.net:27017,find-roommate-shard-00-02-0hbmm.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Find-roommate-shard-0&authSource=admin';
    return MongoClient.connect( connectionString)
        .then((db) => {
            console.log('Databases connected');
            return db;
        });
};

module.exports = { init };
