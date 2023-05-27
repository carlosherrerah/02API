import { pool } from "../db.js";

//export const getEmpleados = (req, res) => res.send('obteniendo empleados')
export const getEmpleados = async (req, res) => {
    try {
        //throw new Error('DB Error')
        const [rows] = await pool.query("Select * from empleados")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
/*
export const getEmpleado =  (req, res) => {
    res.send('Obteniendo empleado')
}
*/

export const getEmpleado = async (req, res) => {
    try {
        console.log(req.params)
        const [rows] = await pool.query('Select * from empleados where IdEmpleado = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({ message: 'Empleado no encontrado' })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: "Somethig goes wrong" })
    }
}

export const createEmpleado = async (req, res) => {
    const { nombre, salario } = req.body
    try {
        const [rows] = await pool.query('Insert into empleados (Nombre, Salario) values (?,?)', [nombre, salario])
        //console.log(req.body)
        //res.send({rows})
        res.send({
            id: rows.insertId,
            nombre,
            salario
        })
    } catch (error) {
        return res.status(500).json({ message: "Somethig goes wrong" })
    }
}

export const deleteEmpleado = async (req, res) => {
    try {
        const [result] = await pool.query('Delete from Empleados where IdEmpleado = ?', [req.params.id])
        console.log(result)
        if (result.affectedRows <= 0) return res.status(404).json({ message: 'Employee not found' })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: "Somethig goes wrong" })
    }
}

export const updateEmpleado = async (req, res) => {
    //const id = req.params.id
    const { id } = req.params
    const { nombre, salario } = req.body
    console.log(id, nombre, salario)
    try {
        // const [result] = await pool.query('UPDATE empleados SET nombre = ?, salario = ? WHERE IdEmpleado = ?', [nombre, salario, id])
        const [result] = await pool.query('UPDATE empleados SET nombre = ifnull(?, nombre), salario = ifnull(?, salario) WHERE IdEmpleado = ?', [nombre, salario, id])
        // console.log(result)
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' })
        const [rows] = await pool.query('Select * from empleados where IdEmpleado = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: "Somethig goes wrong" })
    }
}

