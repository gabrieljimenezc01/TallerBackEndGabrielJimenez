import express from "express";
import { crear } from "../controladores/mascotaController.js";

const routerMascota = express.Router();

routerMascota.get('/', (req, res) => {
    res.send('Hola Sitio de Mascota');
});

routerMascota.post('/crear', (req, res) => {
   // res.send('Crear Mascota');
   crear(req,res);
});

routerMascota.get('/buscar', (req, res) => {
    res.send('Buscar Mascota');
});

routerMascota.get('/buscarId/:id', (req, res) => {
    res.send('Buscar Mascota');
});

routerMascota.put('/actualizar/:id', (req, res) => {
    res.send('Actualizar Mascota');
});

routerMascota.delete('/eliminar/:id', (req, res) => {
    res.send('Eliminar Mascota');
});

export { routerMascota }