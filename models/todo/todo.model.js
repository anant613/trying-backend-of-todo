import mongoose from "mongoose"

const todo_schema = new mongoose.Schema({
    content:{
       type:String,
       required:true,
    },
    complete:{
       type:Boolean,
       default:false
    },
    created:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    subTodos:{
       type:moongose.Schema.Types.ObjectId,
       ref:"subTodo"
    }
    //Array of subtodos
} , {timestamps:true});

export const todo = mongoose.model("todo",todo_schema);