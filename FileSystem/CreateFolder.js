//Create The Folder
const fs=require('fs')

fs.mkdir('./FolderCrete',(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('Folder Created')
    }
})

module.exports=fs