const express = require('express'); //Importation du framework express.js
const cors = require('cors');
const app = express(); //Initialisation de l'app
const utilisateurRoutes = require('./routes/utilisateurRoutes'); //Importation des routes pour les utilisateurs
const patientRoutes=require('./routes/patientRoutes');
const medecinRoutes=require('./routes/medecinRoutes');
const adminRoutes=require('./routes/adminRoutes');
const symptomeRoutes=require('./routes/symptomeRoutes');
const maladieRoutes=require('./routes/maladieRoutes');
const diagnosticRoutes=require('./routes/diagnosticRoutes');

const rendezvousRoutes=require('./routes/rendezvousRoutes');

const consultationRoutes=require('./routes/consultationRoutes');

const recommandationRoutes=require('./routes/recommandationRoutes');

//allow 4200 port
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(express.json()); //L'app utilise le json pour l'échange de données

app.use('/utilisateurs', utilisateurRoutes); //Utilisation des routes pour les utilisateurs
app.use('/patients', patientRoutes); //Utilisation des routes pour les patients
app.use('/medecins', medecinRoutes); //Utilisation des routes pour les médecins
app.use('/admins', adminRoutes); //Utilisation des routes pour les admins

app.use('/symptomes', symptomeRoutes); 
app.use('/diagnostics', diagnosticRoutes); 
app.use('/maladies', maladieRoutes); 


app.use('/rendezvouss', rendezvousRoutes); 
app.use('/consultations', consultationRoutes); 
app.use('/recommandations', recommandationRoutes); 


module.exports = app; //Exportation de l'app pour pouvoir l'utiliser dans d'autres fichiers