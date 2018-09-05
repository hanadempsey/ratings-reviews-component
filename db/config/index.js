const Sequelize = require('sequelize');

const connection = new Sequelize('ratings', 'hodempsey', 'docker', {
  host: 'localhost',
  dialect: 'postgres'
});

connection.authenticate()
.then(() => {
  console.log('success connecting to database')
}).catch(err => {
  console.log('error connecting to database', err)
});

module.exports = {
  connection
};