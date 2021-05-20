const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, './.env')
})
const Sequelize = require('sequelize');

                                //database username   password
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)
