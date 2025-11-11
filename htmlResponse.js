const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    fs.readFile(('./Dummy/index.html'),(err,data)=>{
        if(err)
        {
            console.log(err.message)
        }
        else{
            res.write(data)
            res.end()
        }
    })


})

server.listen(5000,'localhost',()=>{
    console.log('Server is listening')
})