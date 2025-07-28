import mongoose from "mongoose";

const poojaSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:true,
    },
    subject:{
        type:"String",
        required:true,
    },

    message:{
        type:"String",
        required:true,
    },
});



const Pooja = mongoose.model('pooja',poojaSchema);

export default Pooja;