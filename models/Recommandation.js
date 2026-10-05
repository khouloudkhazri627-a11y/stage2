const mongoose = require("mongoose");
const Consultation=require("./Consultation");
const Medecin=require ("./Medecin");
const recommandationSchema=new mongoose.Schema({
    consultation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Consultation",
        required:true
    },
    medecin:{
        type:mongoose.Schema.Types.ObejectId,
        ref:"Medecin",
        required:true
    },
    contenu:{
        type:String,
        required:true
    },
    daterecommandation:{
        type:Date,
        required:true
    },

});
const Recommandation=mongoose.model("Recommandation",recommandationSchema);
module.exports=Recommandation;
