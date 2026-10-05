const mongoose = require("mongoose"); 
const Patient = require("./Patient"); 
const Symptome = require("./Symptome"); 


const diagnosticSchema = new mongoose.Schema({ 
   resultat: {
         type: String,
         enum:["oui","non"],
         required: true },
    niveauurgence: { 
        type: String,
        required: true ,
        enum:["oui","non"],
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
   
    },
    symptome: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Symptome",
        required: true
    }],

    }
    ); 
    
const Diagnostic = mongoose.model('Diagnostic', diagnosticSchema);
     module.exports = Diagnostic;

     
     