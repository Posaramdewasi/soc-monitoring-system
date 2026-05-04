const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const logRoutes = require("./routes/logs")
const alertRoutes = require("./routes/alerts")
const incidentRoutes = require("./routes/incidents")
const authRoutes = require("./routes/auth")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/socdb")

mongoose.connection.on("connected",()=>{
console.log("MongoDB Connected")
})

// ROUTES
app.use("/auth",authRoutes)
app.use("/logs",logRoutes)
app.use("/alerts",alertRoutes)
app.use("/incidents",incidentRoutes)

app.get("/",(req,res)=>{
res.send("SOC Backend Running")
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})