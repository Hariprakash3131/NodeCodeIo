const exp=require('express')
const app=exp()

app.listen(5000)

app.get('/',(req,res)=>{
    res.send("James")
})