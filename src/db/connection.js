const{Sequelize} = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI, {
    pool: {
        max: 5,
        min: 0,
        //30,000 is 30 seconds in code
        acquire: 300000,
        idle: 100000,
    },
});

sequelize.authenticate();

console.log("DB connection is working");

module.exports = sequelize;