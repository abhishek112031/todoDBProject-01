const {Sequelize}=require('sequelize');

const database=new Sequelize('userTodos','root','mysql@2022',{
    dialect:'mysql',
    host:'localhost'
});
module.exports=database;