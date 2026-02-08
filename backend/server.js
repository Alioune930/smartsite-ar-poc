const express = require("express");
const cors = require("cors");
const detectionRoutes = require("./routes/detectionRoutes");

const app = express();
const PORT = 5000;

// Autoriser le frontend React à appeler l'API
app.use(cors());

// Routes pour la détection
app.use("/api/detection", detectionRoutes);

// Test rapide serveur
app.get("/", (req, res) => {
  res.send("Serveur IA en ligne !");
});

// Lancer le serveur
app.listen(PORT, () => console.log(`Serveur IA lancé sur http://localhost:${PORT}`));
