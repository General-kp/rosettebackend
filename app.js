const mongoose=require("mongoose")
const connectdb=async()=>{
 await mongoose.connect("mongodb+srv://generalkp:vasu%403112001@rosette.ga9efyr.mongodb.net/rosette")
.then(()=>console.log("Mongodb connected"))
.catch((err)=>console.log(err))
}


// }
module.exports = connectdb
// mongoose.connect('mongodb://0.0.0.0:27017/rosette', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log(`CONNECTED TO MONGO!`)
//     })
//     .catch((err) => {
//         console.log(`OH NO! MONGO CONNECTION ERROR!`)
//         console.log(err)
//     })

// // //const res=UserModel.find(user1)
// // //console.log(res)
// user1.save()
