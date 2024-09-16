import Sequelize from "sequelize";
import { db } from "../database/conexion.js";
import { mascota } from "./mascotaModelo.js";
import { adoptante } from "./adoptanteModelo.js";


const solicitud = db.define('solicitud', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    fecha_solicitud: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    estado: {
      type: DataTypes.ENUM('Pendiente', 'Aprobada', 'Rechazada'),
      defaultValue: 'Pendiente',
    },
  });
  
  // Relaciones
  solicitud.belongsTo(adoptante, { foreignKey: 'adoptante_id' });
  solicitud.belongsTo(mascota, { foreignKey: 'mascota_id' });

  export { solicitud }