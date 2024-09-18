import express from "express";
import { crear, buscar, buscarId, actualizar, eliminar } from "../controladores/solicitudController.js";

const routerSolicitud = express.Router();

routerSolicitud.get('/', (req, res) => {
    res.send('Hola Sitio de Solicitud de Adopción');
});

routerSolicitud.post('/crear', (req, res) => {
    //res.send('Crear Adopción');
    crear(req,res);
});

routerSolicitud.get('/buscar', (req, res) => {
    //res.send('Buscar Adopción');
    buscar(req,res);
});

routerSolicitud.get('/buscarId/:id', (req, res) => {
    //res.send('Buscar Adopción');
    buscarId(req,res);
});

routerSolicitud.put('/actualizar/:id', (req, res) => {
    //res.send('Actualizar Adopción');
    actualizar(req,res);
});

routerSolicitud.delete('/eliminar/:id', (req, res) => {
    //res.send('Eliminar Adopción');
    eliminar(req,res);
});

export {routerSolicitud}