import express from 'express'
import indexRoutes from './routes/index.routes.js'    // ctrl+click
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express()

// middleware
app.use(express.json())

// routes o EndPoints
app.use(indexRoutes)
app.use('/api', empleadosRoutes)   // OK

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint Not found'
    })
})

export default app;