import "./globals.css";
import Guard from "./Guard";

const SITE = "https://nipuz.lumni.dev.br";

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Nipuz · Vários navegadores isolados numa janela só",
  description:
    "Rode vários navegadores lado a lado numa janela só, cada um com login, cookies e cache totalmente independentes. 7 dias grátis, depois pagamento único de R$ 19,90.",
  keywords: [
    "navegador multi-contas",
    "múltiplas contas",
    "sessões isoladas",
    "navegador",
    "Nipuz",
    "Lumni",
    "workspaces",
  ],
  authors: [{ name: "Lumni" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE,
    siteName: "Nipuz",
    title: "Nipuz · Vários navegadores isolados numa janela só",
    description:
      "Rode várias contas lado a lado numa janela só. Cada navegador com login, cookies e cache independentes. Isolamento real, métricas em tempo real e pagamento único.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nipuz · Vários navegadores isolados numa janela só",
    description:
      "Isolamento real por conta, numa janela só. 7 dias grátis, depois pagamento único.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="/bootstrap-icons/bootstrap-icons.css" />
      </head>
      <body>
        <Guard />
        {children}
      </body>
    </html>
  );
}
