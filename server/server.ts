// const express = require("express")
// require("dotenv").config()
// const path = require("path")
// const app: express.Application = express()
// const port: string | number = process.env.PORT || 4000
// const openaiRoutes = require("./routes/openaiRoutes")

// // enable body parser
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// // set static folder
// app.use(express.static(path.join(__dirname, "../client/dist")))

// app.use("/openai", openaiRoutes)

// app.listen(port, () => console.log(`Server running on ${port}`))

import express, { Application, Request, Response } from "express"
import { config } from "dotenv"
import path from "path"
import openaiRoutes from "./routes/openaiRoutes"

config()

const app: Application = express()
const port: string | number = process.env.PORT || 4000

// enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Static Folder
app.use(express.static("../client/dist"))

// set static folder
app.use(express.static(path.join(__dirname, "../client/dist/index.html")))

app.use("/openai", openaiRoutes)

app.listen(port, (): void => {
  console.log(`Server running on ${port}`)
})
