import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import History from "./pages/history";
import ProtectedRoute from "./routes/ProtectedRoute";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      {/* Redirection par défaut */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Page Login */}
      <Route path="/login" element={<Login />} />

        {/* Page création de compte */}
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard protégé */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Historique protégé */}
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />

      {/* Si route inconnue → login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
