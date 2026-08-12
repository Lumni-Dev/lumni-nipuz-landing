import "./globals.css";

export const metadata = {
  title: "Nipuz",
  description: "Nipuz — navegador multi-contas da Lumni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
