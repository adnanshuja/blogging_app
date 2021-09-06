const model = require('../models');

const createService = async (req, res) => {
    try{
        const service = await model.service.create({
            title: req.body.title,
            header1: req.body.header1,
            description1: req.body.description1,
            header2: req.body.header2,
            description2: req.body.description2,
            summary1: req.body.summary1,
            summary2: req.body.summary2,
            summary1Details: req.body.summary1Details,
            summary2Details: req.body.summary2Details
        })

        res.json({ success: true, message: 'Service created successfully', data: service });
    }
    catch(err){
        throw err;
    }
};

const listAllServices = async (req, res) => {
    try{
        const services = await model.service.findAll({
        limit: 9,
        order: [ [ 'createdAt', 'DESC' ]]
        });

        if(services.length === 0){

            res.json({ success: false, message: 'No services to show'});
        }
        else
        {

            res.json({ success: true, message: 'Services retrieved successfully', data: services });
        }

    }catch(err){
        throw err;
    }
};

const getServiceById = async (req, res) => {
    try {
            const service = await model.service.findOne(
                {
                    where: {
                    id: req.params.id
                }
                });

            if (service) {
                res.json({success: true, data: service});
            }

            else{
                res.json({success: false, data: "The provided service id does not exist!"});
            }

    }catch(err){
        throw err;
    }
};

const ServiceController = {

    createService,
    listAllServices,
    getServiceById
};

module.exports = ServiceController;
