const express = require('express');
const router = express.Router();

const ReviewController = require('../app/controllers/ReviewController');

// router.get('/detail/:id', reviewsController.show);

router.post('/store', ReviewController.store);

router.delete('/:id', ReviewController.deleteReview);

router.get('/:id', ReviewController.showDetail);


module.exports = router;