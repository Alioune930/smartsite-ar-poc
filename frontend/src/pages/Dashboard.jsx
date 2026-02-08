import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CameraView from "../components/CameraView";
import DetectionOverlay from "../components/DetectionOverlay";
import ScoreCard from "../components/ScoreCard";
import Loader from "../components/Loader";
import { analyzeImage } from "../services/api";
import { logout } from "../services/authService";

// Permet de capturer une image (via caméra ou upload), d'afficher les détections,
// le score global, les recommandations et de gérer l'historique.
export default function Dashboard() {
  const [image, setImage] = useState(null);
  const [detections, setDetections] = useState([]);
  const [score, setScore] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

   // Fonction pour capturer ou uploader une image et lancer l'analyse
  const handleCapture = async (file) => {

    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);
    setLoading(true);

    try {
       // Appel au backend pour analyser l'image
      const result = await analyzeImage(file);

       // Mise à jour des détections et du score
      setDetections(result.detections || []);
      setScore(result.globalScore || null);

       // Préparer les recommandations pour affichage
      const recs = result.detections?.map(
        d => `${d.status} → ${d.recommendation || "Aucune"}`
      );
      setRecommendations(recs || []);

      //HISTORIQUE 
      const history = JSON.parse(localStorage.getItem("history")) || [];

      const newEntry = {
        id: Date.now(), // identifiant unique
        date: new Date().toLocaleString(),
        image: imageURL,
        score: result.globalScore || 0
      };

      history.unshift(newEntry);

      localStorage.setItem("history", JSON.stringify(history));

    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'analyse");
    }

    setLoading(false);
  };

    // Déconnexion et redirection vers la page de login
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f3f4f6",
      fontFamily: "Arial, sans-serif"
    }}
  >
    <div
      style={{
        width: 380,
        padding: 25,
        background: "white",
        borderRadius: 15,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}
    >

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: 20, color: "#d97706", margin: 0 }}>
          Analyse du chantier
        </h2>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => navigate("/history")}
            style={{
              padding: "6px 14px",
              fontSize: 13,
              borderRadius: 6,
              border: "none",
              background: "#f97316",
              color: "white",
              cursor: "pointer"
            }}
          >
            Historique
          </button>

          <button
            onClick={handleLogout}
            style={{
              padding: "6px 14px",
              fontSize: 13,
              borderRadius: 6,
              border: "none",
              background: "#ef4444",
              color: "white",
              cursor: "pointer"
            }}
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div
        style={{
          background: "#fff8dc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
          marginTop: 15,
          borderLeft: "5px solid #f7c948"
        }}
      >
        <p><strong>Conseils :</strong></p>
        <ul>
          <li>Prendre une photo nette et bien éclairée.</li>
          <li>Maintenir la caméra à environ 1 à 2 mètres.</li>
          <li>Éviter reflets et ombres directes.</li>
        </ul>
      </div>

      <CameraView onCapture={handleCapture} />

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <label style={{ cursor: "pointer", color: "#d97706", fontWeight: "bold" }}>
          Ou charger une image
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={e => e.target.files[0] && handleCapture(e.target.files[0])}
          />
        </label>
      </div>

      {loading && <Loader />}

      {image && (
        <div style={{ position: "relative", marginBottom: 20 }}>
          <img
            src={image}
            alt="capture"
            width="100%"
            style={{ borderRadius: 8 }}
          />
          <DetectionOverlay detections={detections} />
        </div>
      )}

      {score !== null && <ScoreCard score={score} />}

      {recommendations.length > 0 && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            background: "#f9fafb",
            borderRadius: 10
          }}
        >
          <h3>Recommandations IA :</h3>
          <ul>
            {recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
}