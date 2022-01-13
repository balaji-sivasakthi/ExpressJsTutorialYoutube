const express = require('express')

const route = express.Router()




route.get('/',(req,res)=>{


    const query = req.query.name
    console.log(query);
    res.send("List out all users")

})

route.get('/:id',(req,res)=>{
    res.send("I'm User Params"+req.params.id)
})



module.exports = route