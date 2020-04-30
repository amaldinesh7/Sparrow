const Model = require('../connect');

module.exports = {
    updateUser : (req) => {
        return Model.Temps.update({
            name : req.payload.name,
            email: req.payload.email,
            phone: req.payload.phone,
            dob: req.payload.dob
          }, {
            where: {
              id: req.payload.id
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
}
