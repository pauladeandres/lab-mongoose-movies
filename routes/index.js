module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    //app.use('/celebrities', require('./celebrities.routes.js'))
}