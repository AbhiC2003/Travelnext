const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn } = require("../middleware");
const { createReview, deleteReview } = require("../controllers/reviews.js");

// POST route for creating a review
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));

// DELETE route for deleting a review
router.delete("/:reviewId", isLoggedIn, wrapAsync(deleteReview));

module.exports = router;
