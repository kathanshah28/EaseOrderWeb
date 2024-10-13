import express from 'express'
import {Router} from 'express'
import { registerTable,loginTable } from '../controllers/table.controller.js'

const router = Router()

router.route("/register").post(registerTable)
router.route("/login").post(loginTable)

export default router