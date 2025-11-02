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
