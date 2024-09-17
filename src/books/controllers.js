const Book = require("./model");

//Add book to the collection
const addBook = async (req, res) => {
    try {
        //Try this if successful
        //This will also add to the collection from back-end programming instead of adding via ThunderClient, this adds to ThunderClient from back end. 
        const book = await Book.create({
            // title: "seq book 1",
            title: req.body.title,
            // author: "superman",
            author: req.body.author,
            // genre: "fiction",
            genre: req.body.genre,
        });
        res.status(201).json({message: "success", book: book});
    } catch (error) {
        //If error then does something i.e, catches the error messages and display/sends it to user
        res.status(500).json({message: error.message, error: error});
    }
 };

 //Get all books - INCOMPLETE
const getAllBooks = async (req, res) => {
    try {
        const book = await Book.findAll({});
        res.status(201).json({message: "success, here is all the books", getAllBooks: book});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
};
