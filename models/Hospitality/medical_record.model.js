import mongoose from "mongoose";

const medical_record_schema = new mongoose.Schema({},{timestamps : true});

export const medical_record = mongoose.model("medical_model",medical_record_schema);