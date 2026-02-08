const fakeAi = require("../services/fakeAiService");

exports.analyzeImage = (req, res) => {
    // Vérifier si une image a été envoyée
    if (!req.file) return res.status(400).json({ message: "Aucune image envoyée" });

    // Appel du fake IA pour traitement
    const result = fakeAi.processImage(req.file.path);

    res.json(result);
};
