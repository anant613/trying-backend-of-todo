import mongoo from "moongose"
import { User } from "./user.model"
import mongoose from "mongoose"

const orderItems_schema = new mongoose.Schema(
    {
        ProductId:{
            type:mongoose.Schema.Types.ObjectId(),
            ref:"Product"
        },
        Quantity:{
            type:Number,
            required:true
        }
    })

const order_schema = new mongoose.Schema({
    orderprice:{
        type:Number,
        require:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId(),
        ref:"User",
        require:true
    },
    orderItems:{
        type:[orderItems_schema],
    },
    address:{
        type:String,
        require:true
    },
    Status:{
        type:String,
        enum: ["PENDING","CANCELLED",'DELIVERED'],
        default:"PENDING"
    }
} , {timestamps:true})

export const Order = mongoose.model("Order",order_schema)