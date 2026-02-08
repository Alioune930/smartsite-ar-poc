// Simule la connexion : stocke l'email dans localStorage comme "token"
export function login(email) {
  localStorage.setItem("token", email);
}
// Simule la connexion : stocke l'email dans localStorage comme "token"
export function logout() {
  localStorage.removeItem("token");
}
// Renvoie true si un "token" existe dans le localStorage, false sinon
export function isAuthenticated() {
  return localStorage.getItem("token") !== null;
}
