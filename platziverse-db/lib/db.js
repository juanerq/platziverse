const Sequelize = require('sequelize')

let sequelize = null

const setupDatabase = (config) => {
  !sequelize && (sequelize = new Sequelize(config))
  console.log(config)
  return sequelize
}

module.exports = setupDatabase
