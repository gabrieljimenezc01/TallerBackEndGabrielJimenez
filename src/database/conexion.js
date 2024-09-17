import Sequelize  from "sequelize";

const db = new Sequelize("adopcion","adopcion","adopcion2024",{
    dialect: "mysql",
    host: "localhost"
});

export {db}