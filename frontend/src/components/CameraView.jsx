// Composant React pour afficher la caméra et capturer une image
import { useRef, useEffect } from "react";

export default function CameraView({ onCapture }) {
  // Références vers les éléments HTML <video> et <canvas>
  const videoRef = useRef();
  const canvasRef = useRef();
 // useEffect pour initialiser la caméra au chargement du composant
  useEffect(() => {
     // Demande l'accès à la caméra de l'utilisateur
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => console.error("Erreur caméra :", err));
  }, []);

  const capture = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, 400, 300);

    // Convertit l'image du canvas en blob (fichier image)
    canvasRef.current.toBlob((blob) => {
      if (blob) {
        onCapture(blob); // envoie le blob au Dashboard
      }
    }, "image/png");
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <video ref={videoRef} autoPlay width="100%" style={{ borderRadius: 8 }} />
      <button onClick={capture} style={{ marginTop: 10, padding: "10px 20px" }}>
        Scanner la structure
      </button>
      <canvas ref={canvasRef} width="400" height="300" style={{ display: "none" }} />
    </div>
  );
}
