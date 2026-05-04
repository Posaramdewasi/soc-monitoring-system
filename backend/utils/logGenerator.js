const Log = require("../models/Log")
const detectThreat = require("./detectionEngine")

async function generateRandomLog(){

const devices = ["Firewall","Windows-PC","Linux-Server","Router"]
const events = ["Failed Login","Port Scan","Malware Detected","Suspicious IP"]
const severity = ["Low","Medium","High","Critical"]

const randomDevice = devices[Math.floor(Math.random()*devices.length)]
const randomEvent = events[Math.floor(Math.random()*events.length)]
const randomSeverity = severity[Math.floor(Math.random()*severity.length)]

const ip = "192.168.1." + Math.floor(Math.random()*255)

const newLog = new Log({
source_device:randomDevice,
event_type:randomEvent,
ip_address:ip,
severity:randomSeverity,
description:randomEvent + " detected from " + ip
})

await newLog.save()

console.log("New Log Generated")

await detectThreat(newLog)

}

module.exports = generateRandomLog