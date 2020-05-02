const Model = require('../connect');

module.exports = {
    searchUser :  (req) => {
        var uid = req.params.id;
       return Model.Temps.findAll({
            where: { id : uid }
          })
        }
    }