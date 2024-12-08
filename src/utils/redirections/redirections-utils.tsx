import { useEffect } from "react";

export function RedirectionsToRapidamente() {
  useEffect(() => {
    window.location.href = "https://martin-fenocchio.github.io/rapidamente/";
  }, []);

  return <div></div>;
}

export function RedirectionsToBGRemover() {
  useEffect(() => {
    window.location.href =
      "https://martin-fenocchio.github.io/background-remover/";
  }, []);

  return <div></div>;
}
