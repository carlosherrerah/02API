import { Router } from 'express'
import { getEmpleados, createEmpleado, updateEmpleado, deleteEmpleado, getEmpleado} from '../controllers/empleados.controllers.js'

const router = Router()

router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleado)

router.post('/empleados', createEmpleado)
router.delete('/empleados/:id', deleteEmpleado)
// router.put('/empleados/:id', updateEmpleado)     // actualiza todos los datos
router.patch('/empleados/:id', updateEmpleado)   // solo actualiza una parte de los campos
export default router

