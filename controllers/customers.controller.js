
import { pool } from '../db.js'


// method GET para mostrar todas las preguntas
export const getCustomers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM customers')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }

}


// method POST para registrar una nueva pregunta
export const insertCustomer = async (req, res) => {
    console.log(req.body)

    const { nombre, apellido, cedula, telefono, boleto } = req.body
    // esta consulta me retorna un arreglo con los datos y los ? ? son parametros de la consulta 
    // retorno solo la propiedad row
    // ESA SINTAXIS DE ? ? no es sql sino biblioteca 
    // como segundo parametro recibe un arreglo con los datos que le vamos a pasar a los ? en orden

    try {
        const [rows] = await pool.query('INSERT INTO customers (nombre,apellido,cedula,telefono,boleto) VALUES (?,?,?,?,?)', [nombre, apellido, cedula, telefono, boleto])
        res.send({ rows })
    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }


}

// method PUT para actualizar una pregunta
export const updateCustomer = async (req, res) => {
    const { id } = req.params
    const { nombre, apellido, cedula, telefono } = req.body

    try {
        const [result] = await pool.query('UPDATE customers SET nombre = ?, apellido = ?, cedula = ?, telefono = ?  WHERE id = ?', [nombre, apellido, cedula, telefono, id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No se encontro el empleado'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }


}


// method DELETE para borrar una pregunta
export const deleteCustomer = async (req, res) => {
    const id = req.params.id

    try {
        const [result] = await pool.query('DELETE * FROM customers WHERE id = ?', [id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No se encontro el empleado'
        })

        // si ya actualizo envio cuales fueron los datos actualizados
        const [rows] = await pool.query('SELECT * FROM customers WHERE id = ?', [id])

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }


}

// metodo para obtener un cliente por ID

export const getCustomer = async (req, res) => {
    const id = req.params.id
    try {
        // si ya actualizo envio cuales fueron los datos actualizados
        const [rows] = await pool.query('SELECT * FROM customers WHERE id = ?', [id])
        if (rows[0].lenght === 0) {
            res.json({
                message: 'El cliente con ese id no existe'
            })
        }
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }
}
