"use client";

import { useEffect } from "react";

// Bloqueia o menu de contexto (clique direito) e a seleção de texto/arrasto,
// no mesmo espírito do app (user-select: none). O CSS já barra a seleção;
// aqui garantimos o clique direito e o arrasto de imagens.
export default function Guard() {
  useEffect(() => {
    const prevent = (e) => e.preventDefault();
    document.addEventListener("contextmenu", prevent);
    document.addEventListener("selectstart", prevent);
    document.addEventListener("dragstart", prevent);
    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("selectstart", prevent);
      document.removeEventListener("dragstart", prevent);
    };
  }, []);

  return null;
}
