/* eslint-disable react-refresh/only-export-components */
import { Metadata } from "next";
import { RedirectionsToRapidamente } from "../../src/utils/redirections/redirections-utils";

export const metadata: Metadata = {
  title: "Rapidamente",
  description:
    "Entrena tu mente y compite con otros en simples pero rápidas cuentas matemáticas.",
};

function Page() {
  return <RedirectionsToRapidamente />;
}

export default Page;
