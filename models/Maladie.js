const mongoose=require("mongoose");
const Symptome = require("./Symptome");
const maladieSchema=new mongoose.Schema({
  niveaurisque: {
            type: String,
            required: true
        }, 
 nom: {
            type: String,
            required: true
        }, 

        symptome: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Symptome"
        }],

 });


const Maladie = mongoose.model("Maladie", maladieSchema); 
module.exports = Maladie;