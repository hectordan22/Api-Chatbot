import {Router} from 'express'


// importo las funciones controladoras de la ruta

import {getPreguntas, InsertPregunta,updatePregunta, deletePregunta} from '../controllers/crud.controller.js'

const router = Router()


router.get('/chat-uvm/configurar', getPreguntas)

router.post('/chat-uvm/configurar', InsertPregunta)

router.put('/chat-uvm/configurar/:id', updatePregunta)

router.delete('/chat-uvm/configurar/:id', deletePregunta)


// exporto las rutas para que se usen desde index.js
export default router