const express = require("express");
const router = express.Router();

const {
  getBooks,
  getOneBook,
  setBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

//const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getBooks).post(setBook);
router.route("/:id").get(getOneBook).put(updateBook).delete(deleteBook);

module.exports = router;
