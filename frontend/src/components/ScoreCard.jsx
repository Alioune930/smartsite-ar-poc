export default function ScoreCard({ score }) {

  const color =
    score > 85 ? "green" :
    score > 60 ? "orange" :
    "red";

  return (
    <div style={{
      marginTop:20,
      padding:15,
      borderRadius:10,
      background:"#f1f5f9",
      textAlign:"center"
    }}>
      <h3>Indice de qualité structurelle</h3>
      <h1 style={{color}}>{score}%</h1>
    </div>
  );
}
