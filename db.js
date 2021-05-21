const {DB,DB_USER,DB_PASSWORD,DB_PORT,DB_HOST,DB_DIALECT} = require('./common/config');
const Sequelize = require('sequelize');

                                //database username   password
const sequelize = new Sequelize(DB,DB_USER,DB_PASSWORD, {
    host: DB_HOST,
    port: +DB_PORT,
    dialect: DB_DIALECT,
});

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

module.exports ={
    sequelize:sequelize
}