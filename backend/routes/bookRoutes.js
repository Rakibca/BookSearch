const express = require("express");
const router = express.Router();

const {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

//const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getBooks).post(setBook);
router.route("/:id").delete(deleteBook).put(updateBook);

module.exports = router;
