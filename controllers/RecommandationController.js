const Recommandation = require("../models/Recommandation");

// Ajouter une recommandation
exports.createRecommandation = async (req, res) => {
    try {
        const recommandation = new Recommandation(req.body);
        const recommandationsaved = await recommandation.save();

        res.status(201).json(recommandationsaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer toutes les recommandations
exports.getAllRecommandations = async (req, res) => {
    try {
        const recommandations = await Recommandation.find();

        res.status(200).json(recommandations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer une recommandation par ID
exports.getRecommandationById = async (req, res) => {
    try {
        const recommandation = await Recommandation.findById(req.params.id);

        if (!recommandation) {
            return res.status(404).json({
                message: "Recommandation introuvable"
            });
        }

        res.status(200).json(recommandation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Modifier une recommandation
exports.updateRecommandation = async (req, res) => {
    try {
        const recommandation = await Recommandation.findByIdAndUpdate(req.params.id,req.body, { new: true }
        );

        if (!recommandation) {
            return res.status(404).json({
                message: "Recommandation introuvable"
            });
        }

        res.status(200).json(recommandation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une recommandation
exports.deleteRecommandation = async (req, res) => {
    try {
        const recommandation = await Recommandation.findByIdAndDelete(req.params.id
        );

        if (!recommandation) {
            return res.status(404).json({
                message: "Recommandation introuvable"
            });
        }

        res.status(200).json({
            message: "Recommandation supprimée avec succès"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};