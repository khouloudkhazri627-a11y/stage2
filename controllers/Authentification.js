const jwtService=require('../services/JwtService');
const Utilisateur=require('../models/Utilisateur');
const bcrypt=require('bcrypt');

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const utilisateur=await Utilisateur.findOne({email});
        if(!utilisateur){
            return res.status(404).json({message:"Utilisateur non trouv"});
        }

        const isPasswordValid=await bcrypt.compare(password,utilisateur.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Mot de passe incorrect"});
        }

        const token=jwtService.generateToken({id:utilisateur._id,role:utilisateur.role});
        res.json({token, utilisateur:{id:utilisateur._id,nom:utilisateur.nom,prenom:utilisateur.prenom,email:utilisateur.email,role:utilisateur.role}});
    }catch(error){
        res.status(500).json({message:"Erreur serveur"});
    }
};
