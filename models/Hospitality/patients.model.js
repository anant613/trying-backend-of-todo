import mongoose, { Types } from "mongoose";
import { Hospital } from "./hospitals.model";

const patients_schema = new mongoose.Schema({
    name:{
        Type:String,
        required:true,
    },
    diagonisedWith:{
        Type: String,
        required : true
    },
    age:{
        Type:String,
        require:true
    },
    address:{
        Type:String,
        require:true
    },
    BloodGroup:{
        Type:String,
        require:true
    },
    Gender:{
        Type:String,
        enum : ["MALE","FEMALE","OTHER"],
        require:true
    },
    AdmittedIN:{
        Type:mongoose.Schema.Types.ObjectId(),
        ref:"Hospital",
        require:true
    }
},{timestamps : true});

export const Patients = mongoose.model("Patients",patients_schema);