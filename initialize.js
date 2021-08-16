const DB = require('./models');
const Umzug = require('umzug');
const Path = require('path');
const Sequelize = require('sequelize');
const mySql = require('mysql2/promise');
const Config = require('./config/config.json');

const env = process.env.NODE_ENV || 'development';
const config = Config[env];
const umzug = new Umzug({
    migrations: {
        path: Path.join(__dirname, './migrations'),
        params: [DB.sequelize.getQueryInterface(), Sequelize.DataTypes],
    },
    storage: 'sequelize',
    storageOptions: {
        sequelize: DB.sequelize,
    },
    logging: false,
});


const createDB = async () => {
    await mySql
        .createConnection({
            host: config.host,
            port: config.port,
            user: config.username,
            password: config.password,
        })
        .then((connection) => {
            connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database || 'blogging_app'};`).then((res) => {
                console.info('Database created or successfully checked');
            });
        });
};

const runMigrations = async () => {
    try {
        await createDB();
        await DB.sequelize
            .sync()
            .then(async () => {
                console.log('Connection established with MySQL');
            })
            .catch((error) => console.log('error', error));
        await umzug.up();
        //await umzug.down();
        //await umzug.down({ to: 0 });  //reverts all the migrations
        console.log('Migrations ran successfully');
    } catch (error) {
        console.log(error);
    }
};
module.exports = runMigrations;


