const {Router} = require("express");
const bookRouter = Router();

const {addBook, getAllBooks, deletedBooks, updateAuthor} = require("./controllers");

//These are all the URL's to thunderclient I have created via code and use these URL's to access them. without these created in routes.js these URL's would not work
bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.delete("/books/deletedbooks", deletedBooks);

bookRouter.put("/books/updateauthor", updateAuthor);

module.exports = bookRouter;