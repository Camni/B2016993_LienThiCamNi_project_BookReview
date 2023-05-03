
// const adminRouter = require('./admin.route');
const reviewRouter = require('./review');
const authRouter = require('./auth');
const siteRouter = require('./site');
// const userRouter = require('./user.route');

function route(app) {
    // app.use('/admin', adminRouter);
    app.use('/reviews', reviewRouter);
    app.use('/admin/auth', authRouter);
    // app.use('/users', userRouter);
    app.use('/', siteRouter);
}

module.exports = route;