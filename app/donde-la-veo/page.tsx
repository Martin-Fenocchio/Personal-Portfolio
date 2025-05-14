/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Metadata } from "next";
import { RedirectionsToDondeLaVeo } from "../../src/utils/redirections/redirections-utils";

export const metadata: Metadata = {
  title: "Donde La Veo?",
  description:
    "Encuentra en que app ver tu película o serie de manera sencilla",
};

function Page() {
  return <RedirectionsToDondeLaVeo />;
}

export default Page;
