const express = require('express')

const app = express()

const data = [
  {
    id: 1,
    title: "CAM",
    role: "Plays in midfield"
  },
  {
    id: 2,
    title: "RW",
    role: "Plays upfront on right side of pitch"
  },
  ]

app.get('/api/data',(req,res)=>{
  res.send(data)
})

app.listen(5000,()=>{
  console.log("Server Running On Port 5000")
})