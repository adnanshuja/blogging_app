const { user, service, blog} = require('../controllers');
module.exports = (app) => {

    app.get('', (req, res) => res.status(200).send({
        message: 'Welcome to the App!',
    }));

    // User APIs
    app.post('/api/user/login', user.login);

    // Service APIs
    app.post('/api/service/create', service.createService);
    app.get('/api/service/get-detail', service.listAllServices);
    app.get('/api/service/get-detail/:id', service.getServiceById);

    //Blog APIs
    app.post('/api/blog/create', blog.createBlog);
    app.get('/api/blog/get-detail', blog.listAllBlogs);
    app.get('/api/blog/get-detail/:id', blog.getBlogById);


};

