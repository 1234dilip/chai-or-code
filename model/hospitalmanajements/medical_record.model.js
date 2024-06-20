import mongoose from 'mongoose'
const medicalRecordSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    addres: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'HOspital'
    }
},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema)