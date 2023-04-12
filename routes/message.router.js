import {Router} from 'express'


// importo las funciones controladoras de la ruta

import { createMessage} from '../controllers/message.controller.js'

const router = Router()




router.post('/chat-uvm', createMessage)


// exporto las rutas para que se usen desde index.js
export default router