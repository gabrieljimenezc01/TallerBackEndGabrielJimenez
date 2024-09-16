import Sequelize from "sequelize";
import { db } from "../database/conexion.js";


const adoptante = db.define('adoptante', {
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
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  export { adoptante }