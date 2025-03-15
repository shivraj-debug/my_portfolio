import mongoose ,{Document}from "mongoose";

interface contact extends Document{
    name:string,
    email:string,
    message:string
}

const contactSchema=new mongoose.Schema<contact>({
    name:{
        type:String,
        required:[true ,"name must be written"],
    },
    email:{
        type:String,
        required:[true,"email must be written"],
        unique:[true,"email must be unique"],

    },
    message:{
        type:String,
        required:[true,"mesaage must be written"]
    }
},{
    timestamps:true
}
)

export default mongoose.models.Contact || mongoose.model<contact>("Contact",contactSchema)