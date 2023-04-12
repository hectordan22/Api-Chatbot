// Aca tengo toda la configuracion Global de la Api

import express from 'express'

// importo la ruta de mensajes
import messages_routes from './routes/message.router.js'
// importo la ruta de mensajes
import crud_mesages from './routes/crud.router.js'

import cors from 'cors'


const app = express()

// indico que se pueden recibir json desde el cuerpo de la peticion
app.use(express.json())
// Midleware para recibir los datos de un formulario
app.use(express.urlencoded({extended: false}));

// Antes de llamar a las rutas ejecuto CORS para que mi api pueda ser consumida desde
// Frontends de distintos dominios 
app.use(cors())

// indico que voy a usar la ruta
app.use('/api',messages_routes)
app.use('/api',crud_mesages)

// defino ruta 404
app.use((req,res,next) => {
    res.status(404).json({
        message:'La ruta solicitada no existe'
    })
})

export default app;