const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    fs.readFile(('./Dummy/index.html'),(err,data)=>{
        if(err)
        {
            console.log(err.message)
            res.end()
        }
        else{
            res.write(data)  // its another method res.end(data)
            res.end()
        }
    })


})

server.listen(5000,'localhost',()=>{
    console.log('Server is listening')
})