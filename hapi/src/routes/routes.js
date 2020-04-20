const Joi = require('@hapi/joi');

const controllers = require('../controllers/index')

exports.configureRoutes = (server) => {
    return server.route([{
        // Google Auth Api
        method: '*',
        path: '/bell/door',
        options: {
            auth: {
                strategy: 'google',
                mode: 'try'
            },
        handler: function (request, h) {
            if (!request.auth.isAuthenticated) {
                return 'Authentication failed due to: ' + request.auth.error.message;
            }
                // return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
                return h.redirect('http://localhost:80/callback');
            }
        }
    },{
        // User Creation API
        method:'GET',
        path:'/callback',
        handler: function (request,h) {
            return "success!"
        }
        
    },{
        // User Creation API
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