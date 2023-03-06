const express = require("express")
require("dotenv").config({ path: "./.env" })
const path = require("path")
const app = express()
const port = process.env.PORT || 4000
const openaiRoutes = require("./routes/openaiRoutes")

// enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// set static folder
app.use(express.static(path.join(__dirname, "../client/dist")))

app.use("/openai", openaiRoutes)

app.listen(port, () => console.log(`Server running on ${port}`))
