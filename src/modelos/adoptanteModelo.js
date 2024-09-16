import Sequelize from "sequelize";
import { db } from "../database/conexion.js";


const adoptante = db.define('adoptante', {
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
    telefono: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    direccion: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });

  export { adoptante }