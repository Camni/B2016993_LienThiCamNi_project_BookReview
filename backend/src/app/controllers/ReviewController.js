const Review = require('../models/Review');
const { mongooseToObject } = require('../../utils/mongoose');

class ReviewsController {
    // [GET] /reviews/:id
    showDetail(req, res, next) {
        Review.findOne({_id: req.params.id })
            .then(review => {
                res.send(mongooseToObject(review))
            })
            .catch(next);

    }

    // [POST] /reviews/store
    store(req, res, next) {
        const formData = req.body;
        const review = new Review(formData);
        review.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));
    }

    // [DELETE] /reviews/:id
    deleteReview(req, res, next) {
        Review.deleteOne({ _id: req.params.id })
            .then(() => res.send('DELETE SUCCESS!'))
            .catch(() => res.send('DELETE FAIL!'));
    }

}

module.exports = new ReviewsController;