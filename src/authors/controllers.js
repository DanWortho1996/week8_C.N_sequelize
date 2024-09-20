const { updateAuthor } = require("../books/controllers");
const Author = require("./model");

//Add an author - COMPLETE
//PUT Method on ThunderClient
const addAuthor = async (req, res) => {
    try {
        const author = await Author.create({name: req.body.name});
        res.status(201).json({message: `success, you have added a new author`, author: author});
    } catch (error) {
        res.send(500).json({message: error.message, error: error});
    }
};

//Get all authors - COMPLETE
//GET Method on ThunderClient
const allAuthors = async (req, res) => {
    try {
        const author = await Author.findAll({});
        res.status(201).json({message: "success, you have accessed a list of all the authors", allauthors: author});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

//Find a selected author - COMPLETE
//GET Method on ThunderClient
const oneAuthor = async (req, res) => {
    try {
        const name = await Author.findOne({where: {name: req.params.name}});
        res.status(201).json({message: "success, you have found one of the authors", findoneauthor: name});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

//PUT Method on ThunderClient
//Update author book title via author - INCOMPLETE
const updateAuthorBookTitle = async (req, res) => {
    try {
        const author = await Author.update({where: {title: req.body.title}});
        res.status(201).json({message: "success", updatebookauthor: author});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

//Find specific author with books
//Get author by books


module.exports = {
    addAuthor: addAuthor,
    allAuthors: allAuthors,
    oneAuthor: oneAuthor,
    updateAuthorBookTitle: updateAuthorBookTitle,
    getAuthorByBooks: getAuthorByBooks,
};