const Model = require('../connect');

module.exports = {
    listAllUsers : () => {
        return Model.Temps.findAll()
    }
}