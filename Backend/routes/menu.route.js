import { Router } from "express";
import { addMenuItem,fetchMenuCategory } from "../controllers/menu.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const menuRouter = Router()

menuRouter.route('/addmenucategory').post(upload.single('MenuImg'),addMenuItem)
menuRouter.route('/fetchmenucategory').get(fetchMenuCategory)

export default menuRouter