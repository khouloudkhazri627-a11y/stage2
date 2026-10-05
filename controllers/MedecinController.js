const Medecin = require("../models/Medecin");
const {prepareUtilisateur}=require ("./UtilisateursControllers");
 exports.createMedecin=async(req,res)=>{
    try {
        const MedecinData = await prepareUtilisateur(req.body);
        MedecinData.role="medecin";
        MedecinData.telephone=req.body.telephone;
        MedecinData.adresse=req.body.adresse;
        const medecin = new Medecin(MedecinData);
        const savedMedecin = await medecin.save();
        savedMedecin.password = undefined; // Ne pas renvoyer le mot de passe dans la réponse
        res.status(201).json(savedMedecin);
    }
       
     catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMedecin=async(req,res)=>{
        try{
            const medecin=await Medecin.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.status(200).json(medecin);

        }catch(errur){
            res.status(500).json({message:errur.message})
        }
    }

    exports.getAllMedecin=async(req,res)=>{
    try{
        const medecin=await Medecin.find().select("-password");;
        
        res.status(200).json(medecin);

    }catch(erreur){
        res.status(500).json({message:erreur.message});
    }
};

