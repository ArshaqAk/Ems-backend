import Employee from './db.js'

//get all employee
export const getAllEmployee=()=>{
  return Employee.find().then((response)=>{
    if(response){
      return {
        status: 200,
        employee: response //array of employee
      }
    }
    else{
      return {
        status: 404,
        message: "No employee data"
      }
    }
  })
}

//add employee
export const addEmployee =(doc)=>{
  const {id}=doc.body
  return Employee.findOne({id}).then((response)=>{
    console.log(response)
    if(response){
      return {
        status: 401,
        message: "Employee exist"
      }
    }
    else{
      return Employee.create(doc.body).then((newEmployee)=>{
        return{
          status: 201,
          message: "Employee added successfully",
          employee: newEmployee
        }
      })
    }
  })
  .catch((error)=>{
    return{
      status: 500,
      message: "failed to add employee"
    }
  })
}

//delete employee
export const deleteEmployee =(id)=>{
  return Employee.findByIdAndDelete(id).then((response)=>{
    if(response){
      return {
        status: 200,
        message: "Employee deleted successfully"
      }
    }
    else{
      return {
        status: 404,
        message: "Employee not found"
      }
    }
  })
 .catch((error)=>{
  return{
    status: 500,
    message: "failed to delete employee"
  }
 })}
 
