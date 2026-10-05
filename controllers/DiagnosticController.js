const Diagnostic = require("../models/Diagnostic");


exports.createDiagnostic=async(req,res)=>{
    try{
        
        const diagnostic=new Diagnostic(req.body);
        const saveddiagnostic= await diagnostic.save();
         
        res.status(200).json(saveddiagnostic);
 
         }catch(errur){
             res.status(500).json({message:errur.message})
         }
}
 exports.updateDiagnostic=async(req,res)=>{
         try{
             const diagnostic=await Diagnostic.findByIdAndUpdate(req.params.id,req.body,{new:true});
             res.status(200).json(diagnostic);
 
         }catch(errur){
             res.status(500).json({message:errur.message})
         }
     };
     exports.getAllDiagnostic=async(req,res)=>{
         try{
             const diagnostic=await Diagnostic.find();
             
             res.status(200).json(diagnostic);
     
         }catch(erreur){
             res.status(500).json({message:erreur.message});
         }};
          exports.deleteDiagnostic = async (req, res) => {
             try {
                 const diagnostic = await Diagnostic.findByIdAndDelete(req.params.id);
         
                 if (!diagnostic) {
                     return res.status(404).json({
                         message: "diagnostic non trouvée"
                     });
                 }
         
                 res.status(200).json({
                     message: "diagnostic supprimée avec succès"
                 });
         
             } catch (error) {
                 res.status(500).json({message: "Erreur", error: error.message });
             }
         };


         