const model = require('../models');

const createBlog = async (req, res) => {
    try{
        const blog = await model.blog.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId,
        })

        res.json({ success: true, message: 'Blog created successfully', data: blog });
    }
    catch(err){
        throw err;
    }
};

const listAllBlogs = async (req, res) => {
    try{
        const blogs = await model.blog.findAll()

        if(blogs.length === 0){

            res.json({ success: false, message: 'No blogs to show'});
        }
        else
        {
            res.json({ success: true, message: 'Blogs retrieved successfully', data: blogs });
        }

    }catch(err){
        throw err;
    }
};

const getBlogById = async (req, res) => {
    try {
        const blog = await model.blog.findOne(
            {
                where: {
                    id: req.params.id
                }
            });

        if (blog) {
            res.json({success: true, data: blog});
        }

        else{
            res.json({success: false, data: "The provided blog id does not exist!"});
        }

    }catch(err){
        throw err;
    }
};
const BlogController = {

    createBlog,
    listAllBlogs,
    getBlogById
};

module.exports = BlogController;
