import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cartão umio Campeã" },
      { name: "description", content: "Solicite seu Cartão umio Campeã com limite pré-aprovado de até R$ 5.000 e zero anuidade." },
      { property: "og:title", content: "Cartão umio Campeã" },
      { property: "og:description", content: "Solicite seu Cartão umio Campeã com limite pré-aprovado de até R$ 5.000 e zero anuidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    setSrc("/ml/start.html" + window.location.search);
  }, []);

  return (
    <iframe
      title="Cartão umio Campeã"
      src={src ?? undefined}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
    />
  );
}
