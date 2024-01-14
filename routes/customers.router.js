import {Router} from 'express'


// importo las funciones controladoras de la ruta

import {getCustomers, insertCustomer,updateCustomer, deleteCustomer} from '../controllers/customers.controller.js'

const router = Router()


router.get('/coindraw/configurar', getCustomers)

router.post('/coindraw/configurar', insertCustomer)

router.put('/coindraw/configurar/:id', updateCustomer)

router.delete('/coindraw/configurar/:id', deleteCustomer)


// exporto las rutas para que se usen desde index.js
export default router