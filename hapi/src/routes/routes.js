const Joi = require('@hapi/joi');

const controllers = require('../controllers/index')

exports.configureRoutes = (server) => {
    return server.route([{
        method:'POST',
        path:'/models',
        handler: controllers.createUser.createUser,
        options:{
            validate:{
                payload:Joi.object({
                    name: Joi.string().required(),
                    phone: Joi.number().required(),
                    dob: Joi.date().required(),
                    email: Joi.string().email().required()
                })
            }
        }
    }, {
        method:'PUT',
        path:'/models',
        handler: controllers.updateUser.updateUser,
        options:{
            validate:{
                payload:Joi.object({
                    name: Joi.string().required(),
                    phone: Joi.number().required(),
                    dob: Joi.date().required(),
                    email: Joi.string().email().required()
                })
            }
        }
        
    }, {
        method:'DELETE',
        path:'/models/{uId}',
        handler: controllers.deleteUser.deleteUser
        
    }, {
        method:'GET',
        path:'/models',
        handler: controllers.listAllUsers.listAllUsers
        
    }, {
        method:'GET',
        path:'/models/{id}',
        handler: controllers.searchUser.searchUser

    }])
}