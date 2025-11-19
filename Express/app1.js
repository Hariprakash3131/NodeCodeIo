// const exp=require('express')
// const app=exp()

// app.listen(5000)

// app.get('/',(req,res)=>{
//     res.send("James")
// })


const exp=require('express')
const app=exp()
app.listen(5000)

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname})
})

app.get('/soker',(req,res)=>{
    res.sendFile('./home.html',{root:__dirname})
})
// app.get('/home',(req,res)=>{
//     res.sendFile('./home.html',{root:__dirname})
// })   This code not run redirect to the index.html the reason is : "/home" url 


app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root:__dirname})

})

app.get('/contact',(req,res)=>{
    res.sendFile('./contact.html',{root:__dirname})
})

app.get('/about1',(req,res)=>{   //This is use to Redirect
    res.redirect('about')
})

app.use((req,res)=>{  // Maximum this use method use to last 
    res.sendFile('./notFound.html',{root:__dirname})
})  