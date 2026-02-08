// services/api.js
export async function analyzeImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:5000/api/detection", {
    method: "POST",
    body: formData // fetch définit automatiquement le Content-Type
  });

  if (!res.ok) {
    throw new Error("Erreur lors de l'analyse de l'image");
  }

  return await res.json();
}
