const http=require('http')
const server=http.createServer((req,res)=>{
    console.log('Request Mode')
    console.log(req.url)
    console.log(req.method)

    res.setHeader('content-type','text/html')
    res.write('<h1>Welcome to James</h1>')
    res.write('<p>Thank you</p>')
    res.end()
})

server.listen(3000,'localhost',()=>{
    console.log("Server Listening")
})