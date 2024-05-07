const express = require('express');
const router = express.Router();
//importar archivo controlador
const homeControler = require('../controllers/homeController');

module.exports = function () { //exportar la funcion
    //función ruta Home
    router.get('/', homeControler.Home);
    return router;
}