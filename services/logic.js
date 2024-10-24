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
  return Employee.findOneAndDelete({_id:id}).then((response)=>{
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

 export const viewEmployee=(id)=>{
  return Employee.findOne({_id:id}).then((response)=>{
    if(response){
      return {
        status: 200,
        employee: response
      }
    }
    else{
      return {
        status: 500,
        message: "Employee not found"
      }
    }

  })
 }

 //edit function
 
 export const editEmployee=(doc)=>{
  const {id}=doc
  return Employee.findOne({id}).then((result)=>{
    if(result){
      result.id=doc.id
      result.name=doc.name
      result.age=doc.age
      result.salary=doc.salary
      result.designation=doc.designation
      result.save() //to update data
      return{
        status: 200,
        message: "Employee updated successfully"
      }
    }
    else{
      return{
        status: 404,
        message: "Employee not found"
      }
    }
  })
  .catch((error)=>{
    return{
      status: 500,
      message: "failed to add employee"
    }
  })
 }
 
