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
