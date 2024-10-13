import expres from 'express'
import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { getOrdersbyTableNo, getOrderslist, placeOrder, updateOrderItemStatus, verifyOrder } from '../controllers/order.controller.js'

const router = Router()

// router.route("/addorder").post(authMiddleware,addItemtoOrderList)

router.route("/placeorder").post(authMiddleware,placeOrder)
router.route("/verify").post(verifyOrder)
router.route("/getordersbytable").post(authMiddleware,getOrdersbyTableNo)
router.route("/getorderlist").get(getOrderslist)
router.route("/updateitemstatus").post(updateOrderItemStatus)

export default router

