const Utilisateur=require("../models/Utilisateur");
const bcrypt = require('bcrypt');

// Préparer un utilisateur avant son enregistrement 
exports.prepareUtilisateur = async (data) => { 
    //Vérifier si l'email existe déjà 
    const utilisateurExiste = await Utilisateur.findOne({ email: data.email }); 
    if (utilisateurExiste) { throw new Error("Cet email est déjà utilisé"); } 
    // Hasher le mot de passe 
    data.password = await bcrypt.hash(data.password, 10);
     return data; };


exports.createUtilisateur=async(req,res)=>{
    try{
        // Vérifier si l'email existe déjà const utilisateurExiste = await 
        const utilisateurExiste = await Utilisateur.findOne({ email: req.body.email });
         if (utilisateurExiste) { 
            //409 Conflict 
            return res.status(409).json({ message: "Cet email est déjà utilisé" });
         }
        const utilisateur=new Utilisateur(req.body);
        utilisateur.password = await bcrypt.hash(utilisateur.password, 10); // Hash du mot de passe
        const nouveautilisateur=await utilisateur.save();
        nouveautilisateur.password = undefined; // Ne pas renvoyer le mot de passe dans la réponse
        res.status(201).json(nouveautilisateur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllUtilisateurs=async(req,res)=>{
    try{
        const utilisateurs=await Utilisateur.find().select("-password");;
        
        res.status(200).json(utilisateurs);

    }catch(erreur){
        res.status(500).json({message:erreur.message});
    }
};

exports.getUtilisateurById = async (req, res) => 
    { 
        try { 
        const utilisateur = await Utilisateur.findById(req.params.id);
         if (!utilisateur) { 
         return res.status(404).json({ message: "Utilisateur non trouvé" }); } 
         res.status(200).json(utilisateur); }
         catch (error) {
           res.status(500).json(
         { message: "Erreur lors de la récupération de l'utilisateur", error: error.message });
         } 
        };
exports.updateUtilisateur=async(req,res)=>{
    try{
        const utilisateur=await Utilisateur.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(utilisateur);
    }
    catch(erreur){
        res.status(500).json({message:erreur.message})

};}
exports.deleteUtilisateur=async(req,res)=>{
    try{
        const utilisateur=await Utilisateur.findByIdAndDelete(req.params.id);
        if (!utilisateur){
            return res.status(404).json({message:"Utilisateur non trouvé"});}
         res.status(200).json({message:"Utilisateur supprimé"}); 
        }
        catch(erreur){
            res.status(500).json(
                {message:erreur.message})
        }
        };
  