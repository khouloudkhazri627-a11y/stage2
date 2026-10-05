const Admin = require("../models/Admin");
const {prepareUtilisateur}=require ("./UtilisateursControllers");
 exports.createAdmin=async(req,res)=>{
    try {
        const AdminData = await prepareUtilisateur(req.body);
        AdminData.role="admin";
        AdminData.telephone=req.body.telephone;
        AdminData.adresse=req.body.adresse;
        const admin = new Admin(AdminData);
        const savedAdmin = await admin.save();
        savedAdmin.password = undefined; // Ne pas renvoyer le mot de passe dans la réponse
        res.status(201).json(savedAdmin);
    }
       
     catch (error) {
        res.status(500).json({ message: error.message });
    }
};