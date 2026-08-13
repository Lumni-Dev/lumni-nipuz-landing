// Landing mínima do Nipuz: marca + download do instalador do Windows.
// O .exe vive em public/download/ (fora do git; sobe junto no deploy da CLI).
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        background: "#0f0f0f",
        fontFamily: "system-ui, 'Segoe UI', sans-serif",
        padding: 24,
      }}
    >
      <h1
        style={{
          margin: 0,
          color: "#ffffff",
          fontSize: "clamp(40px, 12vw, 120px)",
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        nipuz
      </h1>
      <p
        style={{
          margin: 0,
          color: "#8a8a8a",
          fontSize: "clamp(14px, 2.2vw, 17px)",
          textAlign: "center",
          maxWidth: 520,
          lineHeight: 1.6,
        }}
      >
        Vários navegadores isolados numa janela só. Cada um com login, cookies e
        cache independentes.
      </p>
      <a
        href="/download/Nipuz-Setup.exe"
        style={{
          display: "inline-block",
          background: "#ffffff",
          color: "#0f0f0f",
          fontSize: 16,
          fontWeight: 700,
          padding: "14px 34px",
          borderRadius: 6,
          textDecoration: "none",
        }}
      >
        Baixar para Windows
      </a>
      <p style={{ margin: 0, color: "#5c5c5c", fontSize: 12.5 }}>
        v1.0.0 · Windows 10/11 (64 bits) · 7 dias grátis, depois pagamento único
        de R$ 19,90
      </p>
    </main>
  );
}
