const Review = require('../models/Review');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Review.find({})
            .then(reviews => {
                res.send({reviews: multipleMongooseToObject(reviews)});
            })
            .catch(next)
    }
}

module.exports = new SiteController;