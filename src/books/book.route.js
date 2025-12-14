const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const Book = require('./book.model')
const {postABook, getAllBooks, getSingleBook,updateABook, deleteBook}  = require('./book.controller')

//frontend => backend server => controller =>book schema =>database => send to server => back to the frontend

// post a book
router.post("/create-book", postABook);

// get All books
router.get("/", getAllBooks);

// get a single book
router.get("/:id", getSingleBook);

// update book
router.put("/edit/:id", updateABook);

// delete book
router.delete("/:id", deleteBook)


module.exports = router;