const express = require('express')
const router = express.Router()

const Book = require('../../models/Book')

// @route   Get api/books/test
// @desc    Test books route
// @access  public
router.get('/test', (req, res) => res.send('book route testing!'))

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', (req, res) => {
  Book.find()
  .then(books => res.json(books))
  .catch(err => res.status(404).json({ nobboksfound: 'No books found' }))
})

// @route   GET api/books/:id
// @desc    Get single book by id
// @access  Public

router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
  .then(book => res.json(book))
  .catch(err => res.status(404).json({nobookfound: "No book found"}))
})

// @route   POST api/books
// @desc    Add/save book
// @access  Public
router.post('/', (req, res) => {
  Book.create(req.body)
  .then(book => res.json({ msg: "Book addes successfully" }))
  .catch(err => res.status(400).json({error: 'Unable to add this book'}))
})

// @route   PUT api/books/:id
// @desc    Update book by id
// @access  Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
  .then(book => res.json({ msg: "Updated successfully" }))
  .catch(err => res.status(400).json({ error: "Unable to update the database" }))
})

// @route   DELETE api/books/:id
// @desc    Delete book by id
// @access  Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
  .then(book => res.json({ msg: "Book entry deleted successfully" }))
  .catch(err => res.status(404).json({ error: "No such a book" }))
})

module.exports = router