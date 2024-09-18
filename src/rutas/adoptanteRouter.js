import express from "express";
import { crear, buscar, buscarId, actualizar, eliminar } from "../controladores/adoptanteController.js";

const routerAdoptante = express.Router();

routerAdoptante.get('/', (req, res) => {
    res.send('Hola Sitio de Adoptante');
});

routerAdoptante.post('/crear', (req, res) => {
   // res.send('Crear Adoptante');
   crear(req,res);
});

routerAdoptante.get('/buscar', (req, res) => {
    //res.send('Buscar Adoptante');
    buscar(req,res);
});

routerAdoptante.get('/buscarId/:id', (req, res) => {
   // res.send('Buscar Adoptante');
   buscarId(req,res);
});

routerAdoptante.put('/actualizar/:id', (req, res) => {
    //res.send('Actualizar Adoptante');
    actualizar(req,res);
});

routerAdoptante.delete('/eliminar/:id', (req, res) => {
    //res.send('Eliminar Adoptante');
    eliminar(req,res);
});

export { routerAdoptante }