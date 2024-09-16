import express from "express";

const routerAdopcion = express.Router();

routerAdopcion.get('/', (req, res) => {
    res.send('Hola Sitio de Adopción');
});

routerAdopcion.post('/crear', (req, res) => {
    res.send('Crear Adopción');
    
});

routerAdopcion.get('/buscar', (req, res) => {
    res.send('Buscar Adopción');
});

routerAdopcion.get('/buscarId/:id', (req, res) => {
    res.send('Buscar Adopción');
});

routerAdopcion.put('/actualizar/:id', (req, res) => {
    res.send('Actualizar Adopción');
});

routerAdopcion.delete('/eliminar/:id', (req, res) => {
    res.send('Eliminar Adopción');
});

export {routerAdopcion}