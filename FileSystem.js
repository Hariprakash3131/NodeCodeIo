//File System

const fs=require('fs')

//Create The Folder
if(! fs.existsSync('./FileSystemFolder')){
    fs.mkdir('./FileSystemFolder',(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
      console.log('Folder Created')
    }
    
   
})
   console.log('mkdir is async function')
}


//Create the File

fs.writeFile('./FileSystemFolder/file1.txt','Try to create the file',(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('File Created')
    }
})

//Read the File
fs.readFile('./FileSystemFolder/file1.txt',(err,data)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log(data.toString())
    }
})