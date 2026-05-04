const axios = require("axios")
const os = require("os")

setInterval(async ()=>{

const log = {
ip_address: "KALI_VM_IP",   // <-- यहाँ Kali की IP डालना
hostname: os.hostname(),
platform: os.platform(),
cpu: Math.floor(Math.random()*100),
memory: Math.floor(Math.random()*100),
activity: "Normal"
}

try{
await axios.post("http://HOST_IP:5000/logs",log)
console.log("Agent Sent Data")
}catch(err){
console.log("Error sending data")
}

},3000)


const attacks = ["Normal","Brute Force","DDoS"]

activity: attacks[Math.floor(Math.random()*3)]


allowedIPs = ["KALI_VM","WINDOWS_2","SERVER_1"]

if(!allowedIPs.includes(log.ip_address)){
return res.send("Blocked")
}