//WriteTheFile
const wf=require('./CreateFolder')

wf.writeFile('./FolderCrete/file1.txt','Create The File',(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('File created')
    }
})


wf.readFile('./FolderCrete/file1.txt',(err,data)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log(data.toString())
    }
})