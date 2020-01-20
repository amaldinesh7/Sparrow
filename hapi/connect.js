'use strict';

var Sequelize = require('sequelize');

var sequelize = new Sequelize('surveysparrow', 'postgres', 'pass', {
  host: 'localhost',
  dialect:'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

sequelize.authenticate().then(() => {
  console.log("Success!");
  var Posts = sequelize.define('posts', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true
  });

  Posts.sync({force: true}).then(function () {
    return Posts.create({
      title: 'Getting Started with PostgreSQL and Sequelize',
      content: 'Hello there'
    });
  });
}).catch((err) => {
  console.log(err);
});
