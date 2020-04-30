const Model = require('../connect');

module.exports = {
    deleteUser : (req) => {
        var uid = req.params.uId;
        return Model.Temps.destroy({
            where: { id : uid }
          })
        }
    }