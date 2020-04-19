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
  Temps.sync()

  module.exports = {
    Temps
  }


