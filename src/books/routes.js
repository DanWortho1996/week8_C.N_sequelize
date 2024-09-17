const {Router} = require("express");
const bookRouter = Router();

const {addBook, getAllBooks} = require("./controllers");

bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getAllBooks);

module.exports = bookRouter;