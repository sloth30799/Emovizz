// import express from "express"
// const router = express.Router()
// const openaiControllers = require("../controllers/openaiControllers")

// router.post("/quiz/:id", openaiControllers.quiz)

// module.exports = router

import express, { Router } from "express"
import { quiz } from "../controllers/openaiControllers"

const router: Router = express.Router()

router.post("/quiz/:id", quiz)

export = router
