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

export { crear };