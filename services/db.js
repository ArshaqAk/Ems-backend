import mongoose from "mongoose";

// mongoose.connect('mongodb+srv://mernadacode:arshaqak@cluster0.naqop.mongodb.net/')
mongoose.connect('mongodb+srv://mernadacode:arshaqak@cluster0.naqop.mongodb.net/EMS?retryWrites=true&w=majority', {
}).then(() => {
    console.log("Connected to MongoDB!");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});


//create a model and schema
const Employee = mongoose.model('employee',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number
})

export default Employee;