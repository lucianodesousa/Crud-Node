
const Sequelize = require('sequelize')
const Sequelize = new Sequelize ('node_exemplo', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    define:{
        charset:'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
})
//teste de conexão com o banco
// sequelize.authenticate().then(function(){
//     console.log('conectado com o banco com sucesso')
// }).catch(function(err){
//     console.log('falha ao se conectar' +err)
// })

module.exports = Sequelize