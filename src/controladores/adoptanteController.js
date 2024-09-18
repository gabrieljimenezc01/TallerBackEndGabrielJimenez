import { solicitud } from "../modelos/solicitudModelo.js"

//Crear un recurso Mascota
const crear = (req,res)=>{

    //Validar 
    if(!req.body.mascota){
        res.status(400).send({
            mensaje: "El nombre no puede estar vacio."
        });
        return;
    }
    if(!req.body.adoptante){
        res.status(400).send({
            mensaje: "La edad no puede estar vacio."
        });
        return;
    }

    const dataset={
        adoptante: req.body.adoptante,
        mascota: req.body.mascota
    }

    //Usuar Sequelize para crear el recurso en la base de datos
    mascota.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro para Solicitud de Adopción Creado con Exito"
        });
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `Registro de Solicitud No creado ::: ${err}`
        });
    });

};

//buscar 
const buscar = (req, res) => {
    solicitud.findAll().then((resultado)=>{
        res.status(200).json({resultado});
    }).catch((err)=> {
        res.status(500).json({
            mensaje: `No se encontraron solicitudes ::: ${err}`
        });
    });
};

//bsucar mascota por id
const buscarId = (req, res) => {
    const id = req.params.id;
    if(id == null){
        res.status(400).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }else{
        solicitud.findByPk(id).then((resultado)=>{
            res.status(200).json({resultado});
        }).catch((err)=> {
            res.status(500).json({
                mensaje: `No se encontro la solicitud ::: ${err}`
            });
        });
    }
    
};

//actualizar
const actualizar = (req, res) => {
    const id = req.params.id;
    if (!req.body.adoptante && !req.body.mascota) {
        res.status(400).json({
            mensaje: `No se encontraron datos de solicitud para actualizar`
        });
        return;
    }
    const adoptante = req.body.adoptante;
    const mascota = req.body.mascota;

    solicitud.update({adoptante,mascota},{where:{id}}).then((resultado)=> {
        res.status(200).json({
            tipo: 'succes',
            mensaje: 'Solicitud actualizada'
        });
    }).catch((err)=> {
        res.status(200).json({
            tipo: 'error',
            mensaje: `Error al actualizar solicitud ::: ${err}`
        });
    });
};

//eliminar mascota
const eliminar = (req, res) => {
    const id = req.params.id;
    if (id == null) {
      res.status(203).json({
        message: "Debe ingresar un ID!",
      });
      return;
    }
    //implementing delete function
    solicitud.destroy({ where: { id: id } })
      .then((result) => {
        res.status(200).json({
            tipo: 'success',
            mensaje: `Solicitud con id ${id} Eliminado Correctamente`
        });
      })
      .catch((err) => {
        res.status(500).json({
            tipo: 'error',
            mensaje: `Error al eliminar Solicitud ::: ${err}`
        });
      });
  };


export { crear, buscar, buscarId, actualizar, eliminar };