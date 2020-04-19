const Model = require('../connect');

module.exports = {
    searchUser :  (req) => {
        var ph = req.params.id;
       return Model.Temps.findAll({
            where: { phone : ph }
          })
        }
    }