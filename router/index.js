const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>Welcome to  Backend</h1><h2>Your App works perfectly!</h2>')
})

module.exports = router