const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{

    res.setHeader('content-type','text/html')
    console.log(req.url)
    let path='./Dummy/';

    if (req.url=='/'){
        path+='index.html'
    }
    else if(req.url=='/home'){
        res.statusCode=301;
        res.setHeader('Location','/')
        res.end()
    }
    else if(req.url=='/about'){
        path+='about.html'
    }
    else if(req.url=='/contact'){
        path+='contact.html'
    }
    else{
        path+='notFound.html'
        res.statusCode=404;
    }

    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err.message)
            res.end()
        }
        else{
            // res.write(data)  // its another method res.end(data)
            res.end(data)
        }
    })


})

server.listen(5000,'localhost',()=>{
    console.log('Server is listening')
})