
const RendezVous = require("../models/Rendezvous");

// Ajouter un rendez-vous
exports.creerRendezVous = async (req, res) => {
    try {
        const rendezVous = new RendezVous(req.body);

        const sevedRendezVous = await rendezVous.save();

        res.status(201).json(sevedRendezVous);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la création du rendez-vous",
            error: error.message
        });
    }
};


// Récupérer tous les rendez-vous
exports.getAllRendezVous = async (req, res) => {
    try {
        const rendezVous = await RendezVous.find();

        res.status(200).json(rendezVous);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération des rendez-vous",
            error: error.message
        });
    }
};


// Récupérer un rendez-vous par ID
exports.getRendezVousById = async (req, res) => {
    try {
        const rendezVous = await RendezVous.findById(req.params.id);

        if (!rendezVous) {
            return res.status(404).json({
                message: "Rendez-vous introuvable"
            });
        }

        res.status(200).json(rendezVous);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération du rendez-vous",
            error: error.message
        });
    }
};


// Modifier un rendez-vous
exports.modifierRendezVous = async (req, res) => {
    try {
        const rendezVous = await RendezVous.findByIdAndUpdate(req.params.id,req.body,{ new: true }
        );

        if (!rendezVous) {
            return res.status(404).json({
                message: "Rendez-vous introuvable"
            });
        }

        res.status(200).json(rendezVous);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la modification du rendez-vous", error: error.message
        });
    }
};


// Supprimer un rendez-vous
exports.supprimerRendezVous = async (req, res) => {
    try {
        const rendezVous = await RendezVous.findByIdAndDelete(req.params.id);

        if (!rendezVous) {
            return res.status(404).json({
                message: "Rendez-vous introuvable"
            });
        }

        res.status(200).json({
            message: "Rendez-vous supprimé avec succès"
        });
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la suppression du rendez-vous",
            error: error.message
        });
    }
};

exports.getRendezVousByIdMedecin = async (req, res) => {
    try {
        const rendezVous = await RendezVous.find({ medecin: req.params.id });

        res.status(200).json(rendezVous);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération des rendez-vous du médecin",
            error: error.message
        })
        
    }
};
exports.getRendezVousByIdPatient= async (req, res) => {
    try {
        const rendezVous = await RendezVous.find({ patient: req.params.id });

        res.status(200).json(rendezVous);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération des rendez-vous du patient",
            error: error.message
        })
        
    }
};
