import express from "express"
const app = express()

const port = 4000
import db from "./models"
import {projectassignments} from "./seeders/projectAssignments"
import {projects} from "./seeders/project"
import {users} from "./seeders/users"




app.get("/", (req,res)=>{
    db.User.findAll({
        inculde:{
            model:db.Project
        }
    }).then((result:object) => res.json(result)).catch((err:object) => console.error(err))    
})




// db.ProjectAssignments.create(
//     {
//         ProjectId:2,
//         UserId:"0441e7f5-a306-459a-8df3-4df4bdf1ad19"
//     }
// )


const createProjectAssignments = ()=>{
    projectassignments.map((projectassignment)=>{
        db.ProjectAssignments.create(projectassignment)
    })
}
// createProjectAssignments()

const createProject = ()=>{
    projects.map((project)=>{
        db.Project.create(project)
    })
}
// createProject()

const createUser = ()=>{
    users.map((user)=>{
        db.User.create(user)
    })
}

// createUser()

db.sequelize.sync().then(()=>{
    app.listen(port,()=>{console.log("App is listening on PORT:4000");
    })
})