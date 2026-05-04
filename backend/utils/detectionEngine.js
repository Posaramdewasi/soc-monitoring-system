const Alert = require("../models/Alert")

async function detectThreat(log){

if(log.event_type === "Failed Login" && log.severity === "High"){

const alert = new Alert({
alert_type:"Brute Force Attack",
ip_address:log.ip_address,
severity:"High"
})

await alert.save()

console.log("ALERT: Brute Force Attack Detected")

}

if(log.event_type === "Port Scan"){

const alert = new Alert({
alert_type:"Port Scan Detected",
ip_address:log.ip_address,
severity:"Medium"
})

await alert.save()

console.log("ALERT: Port Scan Detected")

}

if(log.event_type === "Malware Detected"){

const alert = new Alert({
alert_type:"Malware Activity",
ip_address:log.ip_address,
severity:"Critical"
})

await alert.save()

console.log("ALERT: Malware Activity")

}

}

module.exports = detectThreat