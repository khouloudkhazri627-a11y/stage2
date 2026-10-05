const mongoose = require("mongoose"); 
const Patient=require("./Patient");
const symptomeSchema = new mongoose.Schema({ 
  
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required:true
    },
    nom: { 
        type: String,
        required: true } ,
    description:{
        type: String,
        required: true } ,
    niveauGravite:{
        type:String,
        required:true}
    }
    ); 

     const Symptome = mongoose.model('Symptome', symptomeSchema);
     module.exports = Symptome;