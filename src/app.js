import express from "express";
import {routerAdopcion} from "./rutas/adopcionRouter.js";
import { routerMascota } from "./rutas/mascotaRouter.js";
import {db} from "./database/conexion.js";

//Crear instancia de Express
const app = express();

//Middleware JSON
app.use(express.json());

//Verificar Conexion Base Datos
db.authenticate().then(()=>{
    console.log(`Conexion a Base de datos correcta`);
}).catch(err=>{
    console.log(`Conexion a Base de datos incorrecta ${err}`);
});


//Definir Rutas
app.get('/', (req, res) => {
    res.send('Hola Sitio Principal');
});

//Llamar rutas de adopcion
app.use("/adopcion",routerAdopcion);

app.use("/mascota",routerMascota);

//Puerto de Servidor
const PORT=4000;

db.sync({ force: true }).then(()=>{
    //Abri servicio e iniciar el Servidor
    app.listen(PORT,()=>{
        console.log(`Servidor Inicializado en el puerto ${PORT}`);
    })

}).catch(err=>{
    console.log(`Error al Sincronizar base de datos ${err}`);
});
