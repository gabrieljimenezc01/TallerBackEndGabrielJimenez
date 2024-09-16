import Sequelize from "sequelize";
import { db } from "../database/conexion.js";


const mascota = db.define("mascota", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especie: {
    type: DataTypes.ENUM('Perro', 'Gato', 'Otro'),
    allowNull: false,
  },
  raza: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  estado_adopcion: {
    type: DataTypes.ENUM('Disponible', 'Adoptado'),
    defaultValue: 'Disponible',
  },
});


export { mascota }