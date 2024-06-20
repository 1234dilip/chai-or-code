import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema({
    patientsName: {
        type: String,
        required: true
    },
    diagonseWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHER"]
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, { timestamps: true })


export const Patients = mongoose.model("Patients", patientsSchema)