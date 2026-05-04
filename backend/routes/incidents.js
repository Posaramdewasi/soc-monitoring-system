const express = require("express")
const router = express.Router()

let incidents = []

// GET incidents
router.get("/",(req,res)=>{
res.json(incidents)
})

// CREATE incident
router.post("/create",(req,res)=>{

const incident = req.body

incidents.push(incident)

console.log("Incident Created:", incident)

res.json({message:"Incident created"})
})

module.exports = router