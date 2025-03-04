import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export function RedirectionsToRapidamente() {
  useEffect(() => {
    window.location.href = "https://martin-fenocchio.github.io/rapidamente/";
  }, []);

  return (
    <>
      <Helmet>
        <meta
          property="og:url"
          content="https://martinfenocchio.com/rapidamente"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rapidamente | Martín Fenocchio" />
        <meta
          property="og:description"
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
