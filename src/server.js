require("dotenv").config();
const express = require("express");

const bookRouter = require("./books/routes");

//This is for the model.js file to run the code in the server 5001 because all code is currently running on server.js file
const Book = require("./books/model");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(bookRouter);

const syncTables = () => {
    Book.sync();
};

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on ${port}`)
});