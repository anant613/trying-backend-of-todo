import mongoo from "mongoose";
import { Category } from "./category.model";

const product_schema = new mongoose.SchemaType(
    {
        description:{
            type:String,
            require:true
        },
        name:{
            type:String,
            require:true
        },
        productImage:{
            type:String,
        },
        price:{
            type:Number,
            Require:true
        },
        stock:{
            type:Number,
            Default:0
        },
        Category:{
            type:mongoose.Schema.Types.ObjectId(),
            ref:"Category",
            require:true
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId(),
            ref:"User",
            require:true
        }
    },{timestamps:true})

export const product = mongoose.model("product",product_schema)