const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/chatapp.db',

})

const prevchat = db.define('Chat',{
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    message: {
        type: Sequelize.TEXT
    }
})

module.exports = {db , prevchat}