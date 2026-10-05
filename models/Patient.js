const mongoose = require("mongoose"); 
const Utilisateur = require("./Utilisateur"); 
const patientSchema = new mongoose.Schema({ 
  
    telephone: { 
        type: String,
        required: true } ,
    adresse:{
        type: String,
        required: true } ,
    sexe:{
        type: String,
        required: true  ,
        enum:["homme","femme"]}
    
    }
    ); 

     const Patient= Utilisateur.discriminator("Patient", patientSchema);
     module.exports = Patient;