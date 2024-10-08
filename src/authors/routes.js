const {Router} = require("express");
const authorRouter = Router();

const {addAuthor, allAuthors, oneAuthor, getAuthorAndBooks, updateAuthorBookTitle} = require("./controllers");

//Post add an author - COMPLETE
authorRouter.post("/authors/addauthor", addAuthor);

//Get all authors - COMPLETE
authorRouter.get("/authors/allauthors", allAuthors);

//PUT Update author book title - INCOMPLETE
authorRouter.put("/authors/updateauthorbooktitle/:name/:title", updateAuthorBookTitle);

//Finds a specific author by author name in URL - COMPLETE
authorRouter.get("/authors/oneauthor/:name", oneAuthor);

//Finds an author and a collection of their books - COMPLETE
authorRouter.get("/authors/getauthorandbooks/:name", getAuthorAndBooks);

module.exports = authorRouter;