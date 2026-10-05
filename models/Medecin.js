const mongoose = require("mongoose"); 
const Utilisateur = require("./Utilisateur"); 
const medecinSchema = new mongoose.Schema({ 
    specialite: {
         type: String,
         required: true },
    telephone: { 
        type: String,
        required: true },
    adresse:{
        type: String,
        required: true } 
    }
    ); 
    
    

     const Medecin = Utilisateur.discriminator("Medecin", medecinSchema);
     module.exports = Medecin;