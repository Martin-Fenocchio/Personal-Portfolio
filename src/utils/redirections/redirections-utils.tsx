import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export function RedirectionsToRapidamente() {
  useEffect(() => {
    document.title = "Rapidamente - Martín Fenocchio";
    const metaTags = {
      description:
        "Entrena tu mente y compite con otros en simples pero rápidas cuentas matemáticas.",
      "og:url": "https://martinfenocchio.com/rapidamente",
      "og:title": "Rapidamente - Martín Fenocchio",
      "og:description":
        "Entrena tu mente y compite con otros en simples pero rápidas cuentas matemáticas.",
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta =
        document.querySelector(`meta[property="${name}"]`) ||
        document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        if (name.startsWith("og:")) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    window.location.href = "https://martin-fenocchio.github.io/rapidamente/";
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <meta
          property="og:url"
          content="https://martinfenocchio.com/rapidamente"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rapidamente | Martín Fenocchio" />
        <meta
          property="og:description"
          key="og:desc"
          content="Entrena tu mente y compite con otros en simples pero
      rápidas cuentas matemáticas."
        />
        <title>RápidaMente</title>
      </Helmet>
    </>
  );
}

export function RedirectionsToBGRemover() {
  useEffect(() => {
    window.location.href =
      "https://martin-fenocchio.github.io/background-remover/";
  }, []);

  return <div></div>;
}
