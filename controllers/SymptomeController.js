const Symptome = require("../models/Symptome");


exports.createSymptome=async(req,res)=>{
    try{
        
        const symptome=new Symptome(req.body);
        const savedsymptome= await symptome.save();
         
        res.status(200).json(savedsymptome);
 
         }catch(errur){
             res.status(500).json({message:errur.message})
         }
}
 exports.updateSymptome=async(req,res)=>{
         try{
             const symptome=await Symptome.findByIdAndUpdate(req.params.id,req.body,{new:true});
             res.status(200).json(symptome);
 
         }catch(errur){
             res.status(500).json({message:errur.message})
         }
     };
     exports.getAllSymptome=async(req,res)=>{
         try{
             const symptome=await Symptome.find();
             
             res.status(200).json(symptome);
     
         }catch(erreur){
             res.status(500).json({message:erreur.message});
         }}


         exports.getSymptomesByIdPatient=async(req,res)=>{
            try{
                const symptome=await Symptome.find({patient:req.params.id});
                
                res.status(200).json(symptome);
            }catch(erreur){
                res.status(500).json({message:erreur.message});
            }
        }