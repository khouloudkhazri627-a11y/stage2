

const Patient = require("../models/Patient");
const {prepareUtilisateur}=require ("./UtilisateursControllers");

 exports.createPatient=async(req,res)=>{
    try {
        const patientData = await prepareUtilisateur(req.body);
        patientData.role="patient";
        patientData.telephone=req.body.telephone;
        patientData.adresse=req.body.adresse;
        const patient = new Patient(patientData);
        const savedPatient = await patient.save();
        savedPatient.password = undefined; // Ne pas renvoyer le mot de passe dans la réponse
        res.status(201).json(savedPatient);
    }
       
     catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllPatient=async(req,res)=>{
         try{
             const patient=await Patient.find();
             
             res.status(200).json(patient);
     
         }catch(erreur){
             res.status(500).json({message:erreur.message});
         }}

