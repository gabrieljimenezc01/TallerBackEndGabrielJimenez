import express from "express";
import {db} from "./database/conexion.js";


//Crear instancia de Express
const app = express();


//Definir Rutas
app.get('/', (req, res) => {
    res.send('Hola Sitio Principal');
});

//Puerto de Servidor
const PORT=4000;

db.sync().then(()=>{
    //Abri servicio e iniciar el Servidor
    app.listen(PORT,()=>{
        console.log(`Servidor Inicializado en el puerto ${PORT}`);
    })

}).catch(err=>{
    console.log(`Error al Sincronizar base de datos ${err}`);
});
