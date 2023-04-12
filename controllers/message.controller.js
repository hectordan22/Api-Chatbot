
import { pool } from '../db.js'


// method POST para registrar un empleado
export const createMessage = async (req, res) => {

   const {message} = req.body

    // separo las palabras y elimino espacios en blanco 
    // limito conectores para analizar solo palabras mayores o iguales a 4 letras
   const arrayMessage = message.split(' ')
   const array_limpio =  arrayMessage.filter(cadena => cadena.length >= 3 );

   
    try {
        const [rows] = await pool.query('SELECT id,pregunta FROM messages')
        
      var cont = 0

      function pregunta_correcta() {

        for (let i = 0; i < rows.length; i++) {
            const cada_pregunta = rows[i].pregunta+' '+rows[i].id
  
            for (let x = 0; x < array_limpio.length; x++) {
              const cada_palabra = array_limpio[x];
                
               if (cada_pregunta.includes(cada_palabra)) {
                   cont++
                  if (cont>=3) {
                      return  cada_pregunta
                      
                  }
                  
               }
              
            }
            
            // por cada palabra nueva cont debe valer 0
            cont = 0
            
        }
      }
      
     const correcta = pregunta_correcta()
     
     if (correcta != undefined || correcta != null) {

    // extraigo el id de la pregunta para saber que respuesta buscar
     const fraccionada = correcta.split(' ')

     const id = fraccionada[fraccionada.length-1]
   
     const [result] = await pool.query('SELECT * FROM messages WHERE id = ?',[id])
      
      return res.json(result)
     }
     
 
       return res.json([{respuesta: 'no se encontro respuesta'}])

       
        
    } catch (error) {
        return res.status(500).json({
            message: 'La ruta solicitada no esta disponible temporalmente debido a un error inesperado'
        })
    }


}







