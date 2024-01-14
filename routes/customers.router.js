import {Router} from 'express'


// importo las funciones controladoras de la ruta

import {getCustomers, insertCustomer,updateCustomer, deleteCustomer} from '../controllers/customers.controller.js'

const router = Router()


router.get('/coindraw/getCustomers', getCustomers)

router.post('/coindraw/insertCustomer', insertCustomer)

router.put('/coindraw/updateCustomer/:id', updateCustomer)

router.delete('/coindraw/deleteCustomer/:id', deleteCustomer)


// exporto las rutas para que se usen desde index.js
export default router