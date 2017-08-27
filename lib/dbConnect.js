/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const pg       = require('pg-promise')({});

const pgConfig = {  host:     'localhost',
                    port:     5432,
                    database: 'pbj',
                    user:     'nattydavis',
                    password: 'nyanytee001'
                  };

const db       = pg(pgConfig);
module.exports = db;
