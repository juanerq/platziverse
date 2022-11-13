const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent.model')
const setupMetricModel = require('./models/metric.model')

module.exports = async (config) => {
  console.log(config)
  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  await sequelize.authenticate()

  config.setup && sequelize.sync({ force: true })

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
