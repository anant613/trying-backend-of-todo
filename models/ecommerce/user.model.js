import mongoo from "moongose"

const user_schema = new mongoose.Schema({ 
    username:{
        type: String,
        require: true,
        lowercase: true
    },
    email:{
        type: String,
        require: true,
        lowercase: true
    },
    password:{
        type:String,
        require:true
    }
} , {timestamps:true})

export const User = mongoose.model("User",user_schema)