import express, { Router } from 'express'
import { addFood, listFood, removeFoodItem, searchFoodItem } from '../controllers/foodcontroller.js'
import { upload } from '../middlewares/multer.middleware.js'

const router = Router()

router.route("/addfooditems").post(
    upload.single("image"),addFood
)
router.route("/food_list").get(listFood)
router.route("/removefooditem").post(removeFoodItem)
router.route("/search").post(searchFoodItem)

export default router