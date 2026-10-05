const mongoose = require('mongoose') //Mongoose est le responsabele de la connexion à la base de données MongoDB
const express = require('express');
require('dotenv').config(); //dotenv est utilisé pour charger les variables d'environnement à partir du fichier .env
const app = require('./app');

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connecté à MongoDB'))
.catch((err) => console.log('Erreur de connexion à MongoDB:', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`); //Intérpolation : permet d'insérer la valeur de la variable port dans la chaîne de caractères affichée dans la console

    console.log('kjhgf');
    
})