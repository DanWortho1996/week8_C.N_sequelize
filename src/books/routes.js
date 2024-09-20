const {Router} = require("express");
const bookRouter = Router();

const {addBook, getAllBooks, deletedBooks, updateAuthor, paramsExample, getBookAuthor} = require("./controllers");

//These are all the URL's to thunderclient I have created via code and use these URL's to access them. without these created in routes.js these URL's would not work
bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getAllBooks);

//Deletes a selected book
bookRouter.delete("/books/deletedbooks", deletedBooks);

bookRouter.put("/books/updateauthor", updateAuthor);

//params example
bookRouter.get("/books/paramsexample", paramsExample);

//GET book by author
//The colon : in the URL allows you to search for athor in the URL after the last / you search an author name i.e, /books/getbookauthor/jess for example
bookRouter.get("/books/getbookauthor/:author", getBookAuthor);

module.exports = bookRouter;