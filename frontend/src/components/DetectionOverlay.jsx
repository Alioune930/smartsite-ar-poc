export default function DetectionOverlay({ detections }) {
  return (
    <>
      {detections.map(d => (
        <div
          key={d.id}
          style={{
            position: "absolute",
            border: `3px solid ${d.color}`,
            left: d.bbox.x,
            top: d.bbox.y,
            width: d.bbox.width,
            height: d.bbox.height
          }}
        >
          <span style={{ background: d.color, color: "white" }}>
            {d.status}
          </span>
        </div>
      ))}
    </>
  );
}
