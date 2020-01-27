const Model = require('./connect')

exports.configureRoutes = (server) => {
    return server.route([{
        method:'POST',
        path:'/models',
        handler: (req) => {
            // const model = Model.Temps.build(request.payload.model)
            // return model.save()
            return Model.Temps.create({
                name: req.payload.name,
                email: req.payload.email,
                phone: req.payload.phone,
                dob: req.payload.dob
              });
        }
       
    }, {
        method:'PUT',
        path:'/models',
        handler: (req) => {
            
            return Model.Temps.findAll()
        }
        
    }, {
        method:'DELETE',
        path:'/models',
        handler: (req) => {

            var ph = req.query.phone;
            return Model.Temps.destroy({
                where: { phone : ph }
              })
            }
        
    }, {
        method:'GET',
        path:'/models',
        handler: () => {
            return Model.Temps.findAll()
        }
        
    }, {
        method:'GET',
        path:'/models/phone',
        handler: (req) => {

            var ph = req.query.phone;
           return Model.Temps.findAll({
                where: { phone : ph }
              })
                // .then(ans => {
                //  res.json(ans);
                // });
            
            }
    }])
}