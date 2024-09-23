import Sequelize from "sequelize";
import { db } from "../database/conexion.js";
import { type } from "express/lib/response.js";


const mascota = db.define("mascota", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  especie: {
    type: Sequelize.ENUM('Perro', 'Gato', 'Otro'),
    allowNull: true,
  },
  raza: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  edad: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tamanio:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  descripcion: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  estado_adopcion: {
    type: Sequelize.ENUM('Disponible', 'Adoptado'),
    defaultValue: 'Disponible',
  },
});


export { mascota }