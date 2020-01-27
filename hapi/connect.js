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

// sequelize.authenticate().then(() =>
// {
//   console.log("Success!");
  // Model Defenition
  const Temps = sequelize.define('temps', { 
    name: 
    {
      type: Sequelize.STRING,
      allowNull:false
    },
    email:
    {
      type : Sequelize.STRING,
      allowNull:false
    },
    phone:
    {
      type: Sequelize.BIGINT,
      primaryKey:true
    },
    dob:
      {
      type: Sequelize.DATEONLY,
      allowNull:false
    }
  })

  // Model Inputing
  // Model.sync().then(function () {
    // return Model.create({
    //   name: 'Amal Dinesh',
    //   email:'amalkdinesh@gmail.com',
    //   phone: 974559490,
    //   dob:'1999-07-16'
    // });
  // });
  Temps.sync()

  module.exports = {
    Temps
  }

  // Model.findAll({}).then((data) => {
  //   console.log(data);
  // }).catch((err) => {
  //   console.log(err);
  // });
// }).catch((err) => {
//   console.log(err);
// });


