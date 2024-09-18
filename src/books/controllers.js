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
        res.status(201).json({message: "success, a new book has been added", book: book});
    } catch (error) {
        //If error then does something i.e, catches the error messages and display/sends it to user
        res.status(500).json({message: error.message, error: error});
    }
 };

 //Get all books - COMPLETE
 //Thunder Client is a GET method when using the URL's
const getAllBooks = async (req, res) => {
    try {
        const book = await Book.findAll({});
        res.status(201).json({message: "success, here is all the books", getAllBooks: book});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

//Delete a book selected from the collection - COMPLETE
//Thunder Client is a DELETE method when using the URL's
const deletedBooks = async (req, res) => {
    try {
        const book = await Book.destroy({
            where: {
                title: req.body.title,
            }
        });
        res.status(201).json({message: "success, a books has been deleted", deletedBooks: book});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

//Update author - COMPLETE
//Thunder Client is a PUT method when using the URL's
const updateAuthor  = async (req, res) => {
    try {
        const author = await Book.update({author: req.body.author}, {
            where: {title: req.body.title}
        })
        res.status(201).json({message: `success`, updateAuthor: author});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

//

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deletedBooks: deletedBooks,
    updateAuthor: updateAuthor,
};
