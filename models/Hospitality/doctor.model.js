import mongoose from "mongoose";
import { Hospital } from "./hospitals.model";

const doctor_schema = new mongoose.Schema(
    {
                
        name:{
            Type:String,
            require:true
        },
        age:{
            Type:String,
            require:true
        },
        Salary:{
            Type:String,
            require:true
        },
        Qualification:{
            Type:String,
            require:true
        },
        Experience_years:{
            Type:Number,
            default:0
        },
        WorksinHospital:{
            Type:mongoose.Schema.Types.ObjectId(),
            ref:Hospital,
            require:true
        }
        
    },{timestamps : true});

export const Doctor = mongoose.model("Doctor",doctor_schema);