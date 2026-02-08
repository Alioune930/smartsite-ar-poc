import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/authService";

const containerStyle = {
  width: "100%",
  maxWidth: 700,
  minHeight: "100vh",
  margin: "0 auto",
  padding: 20,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif"
};

export default function Signup() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Vérification email
    if (email !== confirmEmail) {
      setError("Les adresses email ne correspondent pas.");
      return;
    }

    // Vérification mot de passe
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Vérification longueur minimale et complexité mot de passe
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.");
      return;
    }

    // Email simple validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Adresse email invalide.");
      return;
    }

    // Tout est bon
    setSuccess(true);
  };

  if (success) {
    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", color: "#10b981" }}>Compte créé avec succès !</h2>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "10px 20px",
              borderRadius: 6,
              border: "none",
              background: "#d97706",
              color: "white",
              cursor: "pointer"
            }}
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f7c948, #d97706)",
      fontFamily: "Arial, sans-serif"
    }}
  >
    <div
      style={{
        width: 380,
        padding: 30,
        borderRadius: 15,
        background: "white",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#d97706", marginBottom: 10 }}>
        Créer un compte
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          gap: 15
        }}
      >
        <input
          type="email"
          placeholder="Email professionnel"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <input
          type="email"
          placeholder="Confirmer l'email"
          value={confirmEmail}
          onChange={e => setConfirmEmail(e.target.value)}
          required
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />

        {error && (
          <p style={{ color: "#ef4444", fontSize: 14, textAlign: "center" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 8,
            border: "none",
            background: "#f97316",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Créer le compte
        </button>
      </form>

      {/* Bloc conseils style Dashboard */}
      <div
        style={{
          background: "#fff8dc",
          padding: 12,
          borderRadius: 10,
          marginTop: 20,
          borderLeft: "5px solid #f7c948",
          fontSize: 13
        }}
      >
        <p><strong>Exigences :</strong></p>
        <ul style={{ paddingLeft: 18 }}>
          <li>Email valide (exemple@entreprise.com)</li>
          <li>Minimum 8 caractères</li>
          <li>1 majuscule</li>
          <li>1 chiffre</li>
          <li>1 caractère spécial (!@#$…)</li>
        </ul>
      </div>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "6px 14px",
            borderRadius: 6,
            border: "none",
            background: "#d97706",
            color: "white",
            cursor: "pointer"
          }}
        >
          Retour à la connexion
        </button>
      </div>
    </div>
  </div>
);
}
