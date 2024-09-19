import { adoptante } from "../modelos/adoptanteModelo.js"

//Crear un recurso Adoptante
const crear = (req,res)=>{

    //Validar 
    if(!req.body.nombre){
        res.status(400).send({
            mensaje: "El nombre no puede estar vacio."
        });
        return;
    }
    if(!req.body.email){
        res.status(400).send({
            mensaje: "El email no puede estar vacio."
        });
        return;
    }

    const dataset={
        nombre: req.body.nombre,
        email: req.body.email
    }

    //Usuar Sequelize para crear el recurso en la base de datos
    adoptante.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro de Adoptante Creado con Exito"
        });
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `Registro de adoptante No creado ::: ${err}`
        });
    });

};

//buscar 
const buscar = (req, res) => {
    adoptante.findAll().then((resultado)=>{
        res.status(200).json({resultado});
    }).catch((err)=> {
        res.status(500).json({
            mensaje: `No se encontraron adoptantes ::: ${err}`
        });
    });
};

//bsucar adoptante por id
const buscarId = (req, res) => {
    const id = req.params.id;
    if(id == null){
        res.status(400).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }else{
        adoptante.findByPk(id).then((resultado)=>{
            res.status(200).json({resultado});
        }).catch((err)=> {
            res.status(500).json({
                mensaje: `No se encontro al adoptante ::: ${err}`
            });
        });
    }
    
};

//actualizar
const actualizar = (req, res) => {
    const id = req.params.id;
    if (!req.body.nombre && !req.body.email) {
        res.status(400).json({
            mensaje: `No se encontraron datos de Adoptante para actualizar`
        });
        return;
    }
    const nombre = req.body.nombre;
    const email = req.body.email;

    adoptante.update({nombre,email},{where:{id}}).then((resultado)=> {
        res.status(200).json({
            tipo: 'succes',
            mensaje: 'Adoptante actualizado'
        });
    }).catch((err)=> {
        res.status(200).json({
            tipo: 'error',
            mensaje: `Error al actualizar adoptante ::: ${err}`
        });
    });
};

//eliminar adoptante
const eliminar = (req, res) => {
    const id = req.params.id;
    if (id == null) {
      res.status(203).json({
        message: "Debe ingresar un ID!",
      });
      return;
    }
    //implementing delete function
    adoptante.destroy({ where: { id: id } })
      .then((result) => {
        res.status(200).json({
            tipo: 'success',
            mensaje: `Adoptante con id ${id} Eliminado Correctamente`
        });
      })
      .catch((err) => {
        res.status(500).json({
            tipo: 'error',
            mensaje: `Error al eliminar Adoptante ::: ${err}`
        });
      });
  };


export { crear, buscar, buscarId, actualizar, eliminar };