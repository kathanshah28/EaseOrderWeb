import expres from 'express'
import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { addToCart, getCartItems, removefromCart } from '../controllers/cart.controller.js'

const router = Router()

router.route('/addtocart').post(authMiddleware,addToCart)
router.route('/removefromcart').post(authMiddleware,removefromCart)
router.route('/getcartitems').post(authMiddleware,getCartItems)


export default router