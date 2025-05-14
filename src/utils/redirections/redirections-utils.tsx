"use client";

import { useEffect } from "react";

export function RedirectionsToRapidamente() {
  useEffect(() => {
    window.location.href = "https://martin-fenocchio.github.io/rapidamente/";
  }, []);

  return <></>;
}

export function RedirectionsToBGRemover() {
  useEffect(() => {
    window.location.href =
      "https://martin-fenocchio.github.io/background-remover/";
  }, []);

  return <div></div>;
}

export function RedirectionsToDondeLaVeo() {
  useEffect(() => {
    window.location.href = "https://dondelaveo.vercel.app/";
  }, []);

  return <div></div>;
}
