const {DataTypes} = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define("book", {
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    authorname: {
        type: DataTypes.STRING,
        defaultValue: "written by some legendary author",
    },
    genrename: {
        type: DataTypes.STRING,
        defaultValue: "some legendary genre",
    },
},
{timestamps: false}
);

//Write this function out to run the code and have it working
module.exports = Book;