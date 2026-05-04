const express = require("express")
const router = express.Router()

let logs = []

// GET ALL LOGS
router.get("/", (req,res)=>{
res.json(logs)
})

// RECEIVE FROM AGENT
router.post("/", (req,res)=>{

const log = req.body

logs.push(log)

console.log("Agent Log:", log)

res.json({message:"Log stored"})
})

module.exports = router