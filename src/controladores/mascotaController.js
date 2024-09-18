import { mascota } from "../modelos/mascotaModelo.js";

//Crear un recurso Mascota
const crear = (req,res)=>{

    //Validar 
    if(!req.body.nombre){
        res.status(400).send({
            mensaje: "El nombre no puede estar vacio."
        });
        return;
    }
    if(!req.body.edad){
        res.status(400).send({
            mensaje: "La edad no puede estar vacio."
        });
        return;
    }

    const dataset={
        nombre: req.body.nombre,
        edad: req.body.edad
    }

    //Usuar Sequelize para crear el recurso en la base de datos
    mascota.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro de Mascota Creado con Exito"
        });
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `Registro de Mascota No creado ::: ${err}`
        });
    });

};

//buscar 
const buscar = (req, res) => {
    mascota.findAll().then((resultado)=>{
        res.status(200).json({resultado});
    }).catch((err)=> {
        res.status(500).json({
            mensaje: `No se encontraron registros ::: ${err}`
        });
    });
};

const buscarId = (req, res) => {
    const id = req.params.id;
    if(id == null){
        res.status(400).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }else{
        mascota.findByPk(id).then((resultado)=>{
            res.status(200).json({resultado});
        }).catch((err)=> {
            res.status(500).json({
                mensaje: `No se encontraron mascota ::: ${err}`
            });
        });
    }
    
};

//actualizar
const actualizar = (req, res) => {
    const id = req.params.id;
    if (!req.body.nombre && !req.body.edad) {
        res.status(400).json({
            mensaje: `No se encontraron datos para actualizar`
        });
        return;
    }
    const nombre = req.body.nombre;
    const edad = req.body.edad;

    mascota.update({nombre,edad},{where:{id}}).then((resultado)=> {
        res.status(200).json({
            tipo: 'succes',
            mensaje: 'registro actualizado'
        });
    }).catch((err)=> {
        res.status(200).json({
            tipo: 'error',
            mensaje: `Error al actualizar registro ::: ${err}`
        });
    });
};

const eliminar = (req, res) => {
    const id = req.params.id;
    if(id == null){
        res.status(400).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }else{
        mascota.destroy({where:{id: id}}).then((resultado)=>{
            if (num == 1) {
                res.status(200).json({ mensaje: "Mascota eliminada con éxito." });
            } else {
                res.status(404).json({ mensaje: `No se pudo encontrar la mascota con id=${id}.` });
            }
        }).catch((err)=> {
            res.status(500).json({
                mensaje: `No se elimino el registro ::: ${err}`
            });
        });
    } 
};

export { crear, buscar, buscarId, actualizar, eliminar };