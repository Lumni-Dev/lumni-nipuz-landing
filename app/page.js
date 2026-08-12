export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f0f0f",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: "system-ui, 'Segoe UI', sans-serif",
          color: "#ffffff",
          fontSize: "clamp(40px, 12vw, 120px)",
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        nipuz
      </h1>
    </main>
  );
}
