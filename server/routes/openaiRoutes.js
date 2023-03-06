const express = require("express")
const router = express.Router()
const openaiControllers = require("../controllers/openaiControllers")

router.post("/quiz/:id", openaiControllers.quiz)

module.exports = router
