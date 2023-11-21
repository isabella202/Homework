const express = require('express')
const router = express.Router();
const {validarJWT} = require('../middlewares/validar-token');
const{listarTask, crearTask, actualizarTask, eliminarTask} = require('../controllers/task');

router.use( validarJWT)

router.get('/', listarTask)

