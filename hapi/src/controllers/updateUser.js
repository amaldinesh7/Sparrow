const Model = require('../connect');
const Boom = require("@hapi/boom")

module.exports = {
    updateUser: (req) => {
        return Model.Temps.update({
            name: req.payload.name,
            email: req.payload.email,
            phone: req.payload.phone,
            dob: req.payload.dob
        }, {
            where: {
                id: req.payload.id
            }
        }).then(ans => {
            if (ans[0]) {
                return {status: 200, statusText: "OK", message: "Successfully Updated!" };
            }
            else {
                return Boom.badRequest("Updation failed !");
            }
        })
    }
}

