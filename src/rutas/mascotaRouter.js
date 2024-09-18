import express from "express";
import { crear, buscar, buscarId, actualizar, eliminar } from "../controladores/mascotaController.js";

const routerMascota = express.Router();

routerMascota.get('/', (req, res) => {
    res.send('Hola Sitio de Mascota');
});

routerMascota.post('/crear', (req, res) => {
   // res.send('Crear Mascota');
   crear(req,res);
});

routerMascota.get('/buscar', (req, res) => {
    //res.send('Buscar Mascota');
    buscar(req,res);
});

routerMascota.get('/buscarId/:id', (req, res) => {
   // res.send('Buscar Mascota');
   buscarId(req,res);
});

routerMascota.put('/actualizar/:id', (req, res) => {
    //res.send('Actualizar Mascota');
    actualizar(req,res);
});

routerMascota.delete('/eliminar/:id', (req, res) => {
    //res.send('Eliminar Mascota');
    eliminar(req,res);
});

export { routerMascota }