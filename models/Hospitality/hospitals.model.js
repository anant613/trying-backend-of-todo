import mongoose from "mongoose";

const hospitals_schema = new mongoose.Schema({
    name:{
        Type:String,
        require:true
    },
    Location:{
        Type:String,
        require:true
    },
    Nearestplace:{
        Type:String,
        require:true
    },
    pincode:{
        Type:String,
        require:true
    },
    Specalisedin:{
        Type:String,
        require:true
    }
},{timestamps : true});

export const Hospital = mongoose.model("Hospital",hospital_schema);