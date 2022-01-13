const express = require('express')
const userRoute = require('./routes/user')
const app = express()

app.set('view engine','ejs')


app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
// function middleware(req,res,next){
//         console.log("i'm middleware");
//         next()
// }

// app.use(middleware)

app.get('/',(req,res)=>{

    res.send('index.html')
   
})

// app.post('/',(req,res)=>{

//     console.log(req.body.email);
//     res.render('index',{dataq:"Hello"})
// })
// app.use('/user',userRoute)
app.listen(3000)