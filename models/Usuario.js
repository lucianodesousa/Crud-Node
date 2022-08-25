const db = require('./db');
const Usuario = db.sequelize.define('usuario', {
    id: {
        type: db.Sequelize.INTEGER, // tipo de dado
        autoIncrement: true, // auto incremento
        allowNull: false, //não aceita campo nulo
        primaryKey: true // sera chave primaria
    },
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

Usuario.sync() // sincronização se não existir essa tabela ela vai criar
module.exports = Usuario
