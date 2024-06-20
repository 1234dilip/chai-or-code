import mongoose
 from "mongoose";

 const doctorSchema = new mongoose.Schema({
    doctorName: {
        type:String,
        required:true
    },
    salery: {
        type:String,
        required:true
    },
    qualifications: {
        type:String,
        required:true
    },
    experience: {
        type:Number,
        required:true
    },
    woekonHospitals :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ]
 },{timestamps:true})



 export const Doctor = mongoose.model("Doctor",doctorSchema)