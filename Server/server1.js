const createHttp=require('http')
const server=createHttp.createServer((req,res)=>{
    console.log("Request Mode")
})

server.listen(4000,'localhost',()=>{
    console.log('Server is Listening')
})