const Consultation = require("../models/Consultation");


exports.createConsultation=async(req,res)=>{
    try{
        
        const consultation=new Consultation(req.body);
        const savedconsultation= await consultation.save();
         
        res.status(200).json(savedconsultation);
 
         }catch(errur){
             res.status(500).json({message:errur.message})
         }
}
 exports.updateConsultation=async(req,res)=>{
         try{
             const consultation=await Consultation.findByIdAndUpdate(req.params.id,req.body,{new:true});
             res.status(200).json(diagnostic);
 
         }catch(errur){
             res.status(500).json({message:errur.message})
         }
     };
     exports.getAllConsultation=async(req,res)=>{
         try{
             const consultation=await Consultation.find();
             
             res.status(200).json(consultation);
     
         }catch(erreur){
             res.status(500).json({message:erreur.message});
         }};
          exports.deleteConsultation = async (req, res) => {
             try {
                 const consultation = await Consultation.findByIdAndDelete(req.params.id);
         
                 if (!consultation) {
                     return res.status(404).json({
                         message: "Consultation non trouvée"
                     });
                 }
         
                 res.status(200).json({
                     message: "Consultation  supprimée avec succès"
                 });
         
             } catch (error) {
                 res.status(500).json({message: "Erreur", error: error.message });
             }
         };
         


         