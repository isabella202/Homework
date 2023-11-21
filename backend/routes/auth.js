const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); 
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.js');
const { validarCampos } = require('../middlewares/validar-campos.js');
const { validarJWT } = require('../middlewares/validar-token.js')

router.post('/', loginUsuario)

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password').isLength({ min: 6}),
        validarCampos
    ],
    crearUsuario )

//router.post('/renew', validarJWT, revalidarToken)

module.exports = router;