const jwtService = require("../services/JwtService");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Vérifier la présence du token
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token manquant ou format invalide"
            });
        }

        // Récupérer le token
        const token = authHeader.split(" ")[1];

        // Vérifier le token
        const decoded = jwtService.verifyToken(token);

        // Ajouter les informations de l'utilisateur à la requête
        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Token invalide ou expiré"
        });
    }
};

module.exports = authMiddleware;