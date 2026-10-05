const mongoose=require("mongoose");
const Patient = require("./Patient"); 
const Medecin=require("./Medecin");
const Symptome=require("./Symptome");
const consultationSchema=new mongoose. Schema({ 
    observations: {
        type: String,
        required:true
    },

    patient: {
        type: mongoose.Schema.Types.ObjectId,
                ref: "Patient",
                required: true
           
    },

    medecin: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Medecin",
        required:true

    },
    symptome:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Symptome",
        required:true
    }

    

});
const Consultation=mongoose.model("Consultation",consultationSchema);
module.exports=Consultation;

