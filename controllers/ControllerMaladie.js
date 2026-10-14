const Maladie = require("../models/Maladie");


exports.createMaladie = async (req, res) => {
    try {

        const maladie = new Maladie(req.body);
        const savedMaladie = await maladie.save();

        const maladieComplete = await Maladie
            .findById(savedMaladie._id)
            .populate({
                path: "symptome",
                select: "nom description niveauGravite patient",
                populate: {
                    path: "patient",
                    select: "nom"
                }
            });

        res.status(201).json(maladieComplete);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
 exports.updateMaladie=async(req,res)=>{
         try{
             const maladie=await Maladie.findByIdAndUpdate(req.params.id,req.body,{new:true});
             const maladieComplete = await maladie.populate({
            path: "symptome",
            select: "nom description "
        });

        res.status(200).json(maladieComplete);


 
         }catch(errur){
             res.status(500).json({message:errur.message})
         }
     };
     exports.getAllMaladie=async(req,res)=>{
         try{
             const maladie=await Maladie.find().populate(
                {
                    path:"symptome",
                    select:"nom description niveauGravite patient",
                    populate:{
                        path:"patient",
                        select:"nom prenom"
                    }
                }
             );

             
             res.status(200).json(maladie);
     
         }catch(erreur){
             res.status(500).json({message:erreur.message});
         }};


 exports.deleteMaladie = async (req, res) => {
    try {
        const maladie = await Maladie.findByIdAndDelete(req.params.id);

        if (!maladie) {
            return res.status(404).json({
                message: "Maladie non trouvée"
            });
        }

        res.status(200).json({
            message: "Maladie supprimée avec succès"
        });

    } catch (error) {
        res.status(500).json({message: "Erreur", error: error.message });
    }
};
    
   

       


         