const Model = require('../connect');

module.exports = {
    deleteUser : (req) => {
        var ph = req.params.uId;
        return Model.Temps.destroy({
            where: { phone : ph }
          })
        }
    }