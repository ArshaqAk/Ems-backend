import express from 'express'
import cors from 'cors'
import {addEmployee, deleteEmployee, getAllEmployee} from './services/logic.js'
const app = express()

app.use(express.json())
app.use(cors())
app.listen(5000,()=>{
    console.log('server running on the port 5000')
})

//get all employee 
app.get('/getemployees', (req, res) => {
    getAllEmployee().then((result) => {
        res.status(result.status).json(result);
    }).catch(err => {
        console.error("Error getting employees:", err);
        res.status(500).json({ message: "Internal server error"});
    });
});

//add employee route
app.post('/addemployees',(req,res)=>{
    addEmployee(req).then((result)=>{
        res.status(result.status).json(result)
    }).catch(err=>{
        console.error("Error adding employee:",err)
        res.status(500).json({ message: "Internal server error"});
    })
})

//delete route
app.delete('/deleteemployees',(req,res)=>{
    deleteEmployee(req).then((result)=>{
        res.status(result.status).json(result)
    }).catch(err=>{
        console.error("Error deleting employee:",err)
        res.status(500).json({ message: "Internal server error"});
    })
})
    