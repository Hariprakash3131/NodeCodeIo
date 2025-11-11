const reqRes=require('http')
const server=reqRes.createServer((req,res)=>{
    console.log('Request mode')
    console.log(req.url)
    console.log(req.method)

    
    res.setHeader('Content-Type','text/html')
    res.write('<h1>Hariprakash</h1>')
    res.write('<p>Dummy</p>')
    res.end()
})

server.listen(5000,'localhost',()=>{
    console.log('Server listening')
})