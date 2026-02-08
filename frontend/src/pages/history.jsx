import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Affiche l'historique des analyses avec images, score, détections et recommandations
export default function History() {

  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

 // Récupération de l'historique depuis le localStorage au chargement
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(stored);
  }, []);

  // Supprime tout l'historique
  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
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
        <h2 style={{ fontSize: 20, margin: 0, color: "#d97706" }}>
          Historique des analyses
        </h2>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "6px 14px",
            borderRadius: 6,
            border: "none",
            background: "#d97706",
            color: "white",
            cursor: "pointer"
          }}
        >
          Retour
        </button>
      </div>

      {/* Aucun historique */}
      {history.length === 0 && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            textAlign: "center",
            background: "#f9fafb",
            borderRadius: 10
          }}
        >
          <p style={{ margin: 0 }}>Aucune analyse enregistrée.</p>
        </div>
      )}

      {/* Liste historique */}
      {history.map(item => {

        const scoreColor =
          item.score > 85 ? "green" :
          item.score > 60 ? "orange" :
          "red";

        return (
          <div
            key={item.id}
            style={{
              marginTop: 20,
              padding: 20,
              borderRadius: 12,
              background: "#f9fafb",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p><strong>Date :</strong> {item.date}</p>
              <p>
                <strong>Score :</strong>{" "}
                <span style={{ color: scoreColor, fontWeight: "bold" }}>
                  {item.score}%
                </span>
              </p>
            </div>

            <img
              src={item.image}
              alt=""
              width="100%"
              style={{ borderRadius: 8, marginTop: 10 }}
            />
          </div>
        );
      })}

      {/* Bouton supprimer */}
      {history.length > 0 && (
        <button
          onClick={clearHistory}
          style={{
            marginTop: 25,
            padding: "8px 16px",
            borderRadius: 8,
            border: "none",
            background: "#ef4444",
            color: "white",
            cursor: "pointer"
          }}
        >
          Supprimer l'historique
        </button>
      )}
    </div>
  </div>
);
}