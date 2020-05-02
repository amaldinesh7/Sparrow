const Model = require('../connect');

module.exports = {
    createUser : (req) => {
        // const model = Model.Temps.build(request.payload.model)
        // return model.save()
        return Model.Temps.create({
            name: req.payload.name,
            email: req.payload.email,
            phone: req.payload.phone,
            dob: req.payload.dob
          });
    }
}