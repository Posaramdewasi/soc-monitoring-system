const express = require("express")
const router = express.Router()

let alerts = []

// GET ALERTS
router.get("/", (req,res)=>{
res.json(alerts)
})

// CREATE ALERT FROM LOG
router.post("/", (req,res)=>{

const log = req.body

let severity = "Low"

if(log.cpu > 80) severity = "High"
if(log.cpu > 90) severity = "Critical"

const alert = {
alert_type: "System Activity",
ip_address: log.ip_address,
severity
}

alerts.push(alert)

console.log("Alert:", alert)

res.json({message:"Alert created"})
})

module.exports = router