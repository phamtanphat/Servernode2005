const express = require("express")
const app = express()

app.get("/cong" , (req , res) => {
    console.log("Day phuong thuc get")
})


app.listen("3000",() => console.log("Server started"))