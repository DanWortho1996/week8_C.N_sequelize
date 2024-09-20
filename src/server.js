require("dotenv").config();
const express = require("express");

const bookRouter = require("./books/routes");

const authorRouter = require("./authors/routes");

//This is for the model.js file to run the code in the server 5001 because all code is currently running on server.js file
const Book = require("./books/model");

const Author = require("./authors/model");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(bookRouter);

app.use(authorRouter);

const syncTables = () => {
    Author.hasMany(Book);
    Book.belongsTo(Author);
    
    //Author must be at the top here because they would be no book without an author, it has to go in order i.e, author then book
    Author.sync({alter: true});
    Book.sync({alter: true});
};

//Checks servers health - COMPLETE
app.get("/health", (req, res) => {
    res.status(200).json({message: "API is healthy"});
});

//Displays what server we are using - COMPLETE
app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on ${port}`)
});