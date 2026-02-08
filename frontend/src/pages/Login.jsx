import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // chemin relatif depuis Login.jsx


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Veuillez remplir email et mot de passe");
      return;
    }
    login(email); // mock simple
    navigate("/dashboard");
  };

  return (
    <div 
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f7c948, #d97706)", // jaune → orange BTP
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div style={{
        width: 350,
        padding: 30,
        borderRadius: 15,
        background: "rgba(255,255,255,0.9)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <img 
        src={logo} 
        alt="Surveillez, détectez, corrigez!" 
        style={{ width: 300, marginBottom: 20 }}
        />
        
        <h2 style={{ color: "#d97706", marginBottom: 10 }}>Surveillez, détectez, corrigez!</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email professionnel" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: 10, marginBottom: 15, borderRadius: 8, border: "1px solid #ccc" }}
          />
          <input 
            type="password" 
            placeholder="Mot de passe" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: 10, marginBottom: 20, borderRadius: 8, border: "1px solid #ccc" }}
          />
          <button type="submit" style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            background: "#d97706",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none"
          }}>
            Connexion
          </button>
        </form>

        {/* Bouton création de compte */}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button
         type="button"
          onClick={() => navigate("/signup")}
          style={{
            padding: "6px 12px",
            borderRadius: 6,
            border: "none",
            background: "#d97706",
            color: "white",
            cursor: "pointer"
          }}
        >
          Créer un compte
        </button>
      </div>
      </div>
    </div>
  );
}
