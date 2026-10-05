const mongoose = require("mongoose");
const Patient=require("./Patient");
const Medecin=require("./Medecin");
const RendezvousSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },

    heure: {
        type: String,
        required: true
    },

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },

    medecin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medecin"
    },

    statut: {
        type: String,
        default: "en attente"
    }
});

module.exports = mongoose.model("Rendezvous", RendezvousSchema);