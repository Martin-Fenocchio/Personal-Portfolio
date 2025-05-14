/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Metadata } from "next";
import { RedirectionsToBGRemover } from "../../src/utils/redirections/redirections-utils";

export const metadata: Metadata = {
  title: "Background Remover",
  description: "Elimina el fondo de tus imágenes de forma sencilla.",
};

function Page() {
  return <RedirectionsToBGRemover />;
}

export default Page;
