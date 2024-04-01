const mongoose = require('mongoose')

mongoose.connect(process.env.DB).then(()=>{
    console.log('DB conection successfully')
}).catch((error)=>{
    console.log(error)
})