const express = require('express');
const router = express.Router();
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/', productController.readAll);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
router.get('/detalle/:menuId', productController.readDetail);    


/* BUSCA UN PRODUCTO */


/* FILTRA PRODUCTOS SEGUN CATEGORIA/CUERDAS/ARNESES */

/* RECIBE DATOS DEL FORMULARIO DE CREACION */


/* RECIBE FORMULARIO DE EDICION */

/* ELIMINA PRODUCTO  */

module.exports = router;