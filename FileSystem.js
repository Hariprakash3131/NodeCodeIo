//File System

const fs=require('fs')

//Create The Folder
fs.mkdir('./FileSystemFolder',(err)=>{
    if(err){
        console.log('Folder not created')
    }
    console.log('Folder Created')
})

