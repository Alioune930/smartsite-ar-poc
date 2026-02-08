// Fonction qui retourne aléatoirement un état de détection
function randomState() {
     // Tableau des différents états possibles avec leur gravité, recommandation et couleur
    const states = [
        { status: "Correct", severity: "Faible", recommendation: "Aucune intervention nécessaire", color: "green" },
        { status: "Corrosion légère", severity: "Moyen", recommendation: "Surveillance recommandée", color: "orange" },
        { status: "Corrosion avancée", severity: "Critique", recommendation: "Intervention urgente", color: "red" }
    ];
    return states[Math.floor(Math.random() * states.length)];
}
// Fonction principale qui simule le traitement d'une image par l'IA
exports.processImage = (imagePath) => {
    const analysis = randomState();

    // Mock de plusieurs détections avec bbox
    const detections = [
        {
            id: 1,
            bbox: { x: 30, y: 50, width: 150, height: 100 },
            status: analysis.status,
            color: analysis.color,
            recommendation: analysis.recommendation,
            confidence: (Math.random() * (0.98 - 0.75) + 0.75).toFixed(2)
        },
        {
            id: 2,
            bbox: { x: 220, y: 80, width: 100, height: 80 },
            status: analysis.status,
            color: analysis.color,
            recommendation: analysis.recommendation,
            confidence: (Math.random() * (0.98 - 0.75) + 0.75).toFixed(2)
        }
    ];

    const globalScore = Math.floor(Math.random() * (100 - 60) + 60);

    return { detections, globalScore };
};
