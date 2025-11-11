const stream=require('fs')
const readStream=stream.createReadStream('./Dummy/streams.txt',{encoding:'utf-8'})
const writeStream=stream.createWriteStream('./Dummy/copyStreams.txt')

// readStream.on('data',(buffer)=>{
//        writeStream.write(buffer)
// })

readStream.pipe(writeStream)

// readStream.on('data',(buffer)=>{    // on is event
//     console.log('\n New Line \n')
//       console.log('\n New Line \n')
//         console.log('\n New Line \n')
//     console.log(buffer)  //  console.log(buffer.toString())
// })