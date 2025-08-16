import mongoo from "moongose"

const category_schema = new mongoose.Schema({ 
    name:{
        type: String,
        required: true,
        lowercase: true
    },
} , {timestamps:true})

export const Category= mongoose.model("Category",category_schema)