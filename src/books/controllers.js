const addBook = async (req, res) => {
    try {
        //Try this thing if successful
        res.status(201).json({message: "success"});
    } catch (error) {
        //If error then does something i.e, catches the error messages and display/sends it to user
        res.status(500).json({message: error.message, error: error});
    }
 };

module.exports = {
    addBook: addBook,
};