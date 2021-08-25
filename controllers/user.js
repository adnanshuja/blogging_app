const model = require('../models');

const login = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await model.user.findOne(
            {
                where: {
                    username: username,
                    password: password
                },
            });

        if (!user) {
            return res.status(401).send({
                status: 401,
                message: 'Invalid username or password!'
            });
         }
            else {
                res.status(200).send({
                    status: 200,
                    message: 'Logged in successfully!',
                    token: 'abc123',
                    user: user
                });
            }

    } catch (err) {
        throw err;
    }
};

const userController = {
    login

};

module.exports = userController;
