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

            return Model.Temps.update({
                name : req.payload.name,
                email: req.payload.email,
                phone: req.payload.phone,
                dob: req.payload.dob
              }, {
                where: {
                  phone: req.payload.id
                }
              }).then(ans => {
                  if (ans[0]){
                      return "Successfully Updated!";
                  }
                  else{
                      return "Updation failed !";
                  }
              })
            
            }     
        
    }, {
        method:'DELETE',
        path:'/models/{uId}',
        handler: (req) => {
            var ph = req.params.uId;
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
        path:'/models/{id}',
        handler: (req) => {

            var ph = req.params.id[1];
           return Model.Temps.findAll({
                where: { phone : ph }
              })
                // .then(ans => {
                //  res.json(ans);
                // });
            
            }
    }])
}