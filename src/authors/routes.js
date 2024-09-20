const {Router} = require("express");
const authorRouter = Router();

const {addAuthor, allAuthors, updateAuthorBookTitle, oneAuthor, getAuthorByBook} = require("./controllers");

//Add an author
authorRouter.post("/authors/addauthor", addAuthor);

//Get all authors
authorRouter.get("/authors/allauthors", allAuthors);

//PUT Update author book title
authorRouter.put("/authors/updateauthorbooktitle", updateAuthorBookTitle);

//Finds a specific author by author name in URL
authorRouter.get("/authors/oneauthor/:name", oneAuthor);

authorRouter.get("/authors/getauthorbooktitle", getAuthorBookTitle)

module.exports = authorRouter;