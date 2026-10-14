const roleMiddleware = (...roles) => {
    return (req, res, next) => {

        // Vérifier que l'utilisateur est authentifié
        if (!req.user) {
            return res.status(401).json({
                message: "Authentification requise"
            });
        }

        // Vérifier le rôle de l'utilisateur
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Accès interdit : rôle insuffisant"
            });
        }

        next();
    };
};

module.exports = roleMiddleware;