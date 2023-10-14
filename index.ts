import express from "express"
const app = express()

const port = 4000
import db from "./models"

db.sequelize.sync().then(()=>{
    app.listen(port,()=>{console.log("App is listening on PORT:4000");
    })
})