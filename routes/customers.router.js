import { Router } from 'express'


// importo las funciones controladoras de la ruta

import { pagar, getSorteoBuyers, getRifasBuyers, comprarSorteo,comprarRifa, updateCustomer, deleteCustomer, getCustomer, searchTicket, showFormBuy, getPriceDolar } from '../controllers/customers.controller.js'

const router = Router()


router.get('/coindraw/getSorteoBuyers', getSorteoBuyers)

router.get('/coindraw/getRifasBuyers', getRifasBuyers)

router.get('/coindraw/searchTicket/:id_compra', searchTicket)

router.get('/coindraw/getCustomer/:id', getCustomer)

router.post('/coindraw/comprarSorteo', comprarSorteo)

router.post('/coindraw/comprarRifa', comprarRifa)

router.get('/coindraw/pagar', pagar)

router.put('/coindraw/updateCustomer/:id', updateCustomer)

router.delete('/coindraw/deleteCustomer/:id', deleteCustomer)

router.get('/coindraw/comprar', showFormBuy)

router.get('/coindraw/getDolar', getPriceDolar)


// exporto las rutas para que se usen desde index.js
export default router