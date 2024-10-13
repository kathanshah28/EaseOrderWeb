import express from 'express'
import { loginUser,registerUser } from '../controllers/user.controller.js'
import { Router } from 'express'

const userrouter = Router()

userrouter.route("/login").post(loginUser)
userrouter.route("/register").post(registerUser)

export default userrouter
