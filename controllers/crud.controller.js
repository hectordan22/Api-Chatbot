
import { pool } from '../db.js'


// method GET para mostrar todas las preguntas
export const getPreguntas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }

}


// method POST para registrar una nueva pregunta
export const InsertPregunta = async (req, res) => {

    const { name, salary } = req.body
    // esta consulta me retorna un arreglo con los datos y los ? ? son parametros de la consulta 
    // retorno solo la propiedad row
    // ESA SINTAXIS DE ? ? no es sql sino biblioteca 
    // como segundo parametro recibe un arreglo con los datos que le vamos a pasar a los ? en orden

    try {
        const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)', [name, salary])
        res.send({ rows })
    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }


}

// method PUT para actualizar una pregunta
export const updatePregunta = async (req, res) => {
    const { id } = req.params
    const { name, salary } = req.body

    try {
        const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', [name, salary, id])

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
export const deletePregunta = async (req, res) => {
    const id = req.params.id

    try {
        const [result] = await pool.query('DELETE * FROM employee WHERE id = ?', [id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No se encontro el empleado'
        })

        // si ya actualizo envio cuales fueron los datos actualizados
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }


}
