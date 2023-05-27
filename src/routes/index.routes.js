import { Router } from 'express'
import { ping } from '../controllers/index.controller.js';
// import employeesRoutes from './empleados.routes.js'    // ctrl+click

const router = Router()

router.get('/',  (req, res) => {
    res.send("Hello World  . . .");
});

router.get('/ping', ping);

// router.use(employeesRoutes)  // OK

export default router

