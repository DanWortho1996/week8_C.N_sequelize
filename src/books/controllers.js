const Book = require("./model");

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

module.exports = {
    addBook: addBook,
};