const mongoose=require('mongoose');
const Utilisateur = require("./Utilisateur");
const adminSchema=new mongoose.Schema({ });

const Admin = Utilisateur.discriminator("Admin", adminSchema); 
module.exports = Admin;