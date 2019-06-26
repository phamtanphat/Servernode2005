const express = require("express")
const app = express()

// truong hoac round
app.get("/chia/:a/:b" , (req , res) => {
    const {a , b} = req.params
    if(isNaN(a) || isNaN(b)){
       return res.send({success : false , message : "Not a number"})
    }else if(b == 0){
        return res.send({success : false , message : "DIVIDE ZERO"})
    }
    const ketqua = +a + +b
    res.send({success : true , ketqua})
})


app.listen("3000",() => console.log("Server started"))