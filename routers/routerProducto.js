import {Router} from 'express';
import {obtengoProducto,agregarProductos,actualizaProductosAll,borrarProducto} from '../controller/controllerProductos.js'

const rutas = Router();

rutas.get('/:name',obtengoProducto)
rutas.post('/',agregarProductos)
rutas.put('/',actualizaProductosAll)
rutas.delete('/',borrarProducto)

export default rutas