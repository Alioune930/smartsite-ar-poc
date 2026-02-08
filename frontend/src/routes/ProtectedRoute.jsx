// Protège certaines routes en vérifiant si l'utilisateur est connecté
// Si l'utilisateur n'est pas authentifié, il est redirigé vers la page de login
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
 // isAuthenticated() : vérifie si un token ou identifiant existe dans le localStorage
  // Si connecté → affiche le composant enfant (children)
  // Sinon → redirige vers /login
export default function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}
