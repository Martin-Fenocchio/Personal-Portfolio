/* eslint-disable @typescript-eslint/no-unused-vars */
import MenteRapida from "../../assets/pictures/projects/rapidamente-vision.webp";
import PokedexPicture from "../../assets/pictures/projects/pokedex-vision.webp";
import StarWarsPicture from "../../assets/pictures/projects/starwars-vision.webp";
import GuatapayPicture from "../../assets/pictures/projects/guatapay-vision.webp";
import AdamoPicture from "../../assets/pictures/projects/adamo-vision.webp";
import UposPicture from "../../assets/pictures/projects/upos-vision.webp";
import LimboScanPicture from "../../assets/pictures/projects/limboscan-vision.webp";
import CuyPicture from "../../assets/pictures/projects/cuy-vision.webp";
import FMoneyPicture from "../../assets/pictures/projects/fmoney-vision.webp";
import GuatapayWebPicture from "../../assets/pictures/projects/guatapay-web-vision.webp";
import DarxprexWebPicture from "../../assets/pictures/projects/darxprex-web-vision.webp";
import AdamoIDWebPicture from "../../assets/pictures/projects/adamo-web-vision.webp";
import LimboXtractoPicture from "../../assets/pictures/projects/limboxtractor-vision.webp";
import BGRemoverPicture from "../../assets/pictures/projects/bg-remover-vision.webp";

import FlutterIcon from "../../assets/icons/flutter.svg";
import BlocIcon from "../../assets/icons/bloc.webp";
import FirebaseIcon from "../../assets/icons/firebase.svg";
import ProviderIcon from "../../assets/icons/provider.svg";
import ReactIcon from "../../assets/icons/react.svg";
import ReduxIcon from "../../assets/icons/redux.svg";
import ScssIcon from "../../assets/icons/scss.svg";
import TailwindIcon from "../../assets/icons/tailwind.svg";

const menteRapidaProject = {
  title: "MenteRapida",
  image: MenteRapida,
  url: "/rapidamente",
  tags: [
    { text: "React", image: ReactIcon },
    { text: "Redux", image: ReduxIcon },
    { text: "SCSS", image: ScssIcon },
  ],
  description: (
    <p>
      A <strong>mini-game</strong> with a{" "}
      <strong>dailly mathematic challenge</strong>, similar to wordle and
      similars.
    </p>
  ),
};

const pokedexProject = {
  title: "Pokédex",
  image: PokedexPicture,
  url: "https://drive.google.com/file/d/1dhz-31r_NdPW66Zv6o-IeA2cNMfdhQpq/view?usp=sharing",
  tags: [
    { text: "Flutter", image: FlutterIcon },
    { text: "Bloc", image: BlocIcon },
  ],
  description: (
    <p>
      App made for <strong>Pokémon fans</strong>, all the{" "}
      <strong>characters</strong> with their{" "}
      <strong>information, skills, categories</strong> and pictures.
    </p>
  ),
};

const starWarsProject = {
  title: "Star Wars Invasion",
  image: StarWarsPicture,
  url: "https://drive.google.com/file/d/1nzHq79XD9UxkhRJsmNRkCoJlihhI_imI/view?usp=sharing",
  tags: [
    { text: "Flutter", image: FlutterIcon },
    { text: "Bloc", image: BlocIcon },
  ],
  description: (
    <p>
      App made for <strong>Star Wars fans</strong>, all the{" "}
      <strong>characters</strong> with their{" "}
      <strong>information, skills, categories</strong> and pictures.
    </p>
  ),
};

const adamoProject = {
  title: "Adamo ID",
  image: AdamoPicture,
  url: "https://adamo-client-qa.limboteams.com/",
  tags: [
    { text: "Flutter", image: FlutterIcon },
    { text: "Firebase", image: FirebaseIcon },
    { text: "Bloc", image: BlocIcon },
  ],
  description: (
    <p>
      <strong>Digital signatures</strong> and{" "}
      <strong>identity verifications</strong>, <strong>lead</strong> the{" "}
      <strong>front-end</strong> both the app and the web part, Using{" "}
      <strong>Flutter Web</strong> and React JS
    </p>
  ),
};

const adamoWebProject = {
  title: "Adamo ID",
  image: AdamoIDWebPicture,
  url: "https://www.adamoservices.co/",
  tags: [
    { text: "React", image: ReactIcon },
    { text: "Redux", image: ReduxIcon },
    { text: "SCSS", image: ScssIcon },
  ],
  description: (
    <p>
      <strong>Digital signatures</strong> and{" "}
      <strong>identity verifications</strong>, <strong>lead</strong> the{" "}
      <strong>front-end</strong> both the app and the web part, Using{" "}
      <strong>React JS</strong> and Flutter
    </p>
  ),
};

const guatapayPlatformProject = {
  title: "Guatapay Platform",
  image: GuatapayWebPicture,
  url: "http://guatapay.com/",
  tags: [
    { text: "React", image: ReactIcon },
    { text: "Context", image: ReduxIcon },
    { text: "SCSS", image: ScssIcon },
  ],
  description: (
    <p>
      Platform that <strong>allows e-commerces</strong> to{" "}
      <strong>accept and receive cryptocurrency payments</strong> by installing
      a add-on in their store.
    </p>
  ),
};

const guatapayProject = {
  title: "Guatapay",
  image: GuatapayPicture,
  url: "http://guatapay.com/",
  tags: [
    { text: "Flutter", image: FlutterIcon },
    { text: "Bloc", image: BlocIcon },
    { text: "Firebase", image: FirebaseIcon },
  ],
  description: (
    <p>
      <strong>Crypto wallet</strong>, receive and send Bitcoin to whomever you
      want, made in Flutter, <strong>I leaded the FrontEnd development</strong>{" "}
      in this project.
    </p>
  ),
};

const darxprexWebProject = {
  title: "Darxprex Web",
  image: DarxprexWebPicture,
  url: "https://darxprex.com/",
  tags: [
    { text: "React", image: ReactIcon },
    { text: "Context", image: ScssIcon },
    { text: "Tailwind", image: TailwindIcon },
  ],
  description: (
    <p>
      Web platform for Darxprex app{" "}
      <strong>workers to manage their customers</strong>, place orders, track
      revenue and more.
    </p>
  ),
};

const fmoneyProject = {
  title: "FMoney",
  image: FMoneyPicture,
  tags: [
    { text: "React", image: ReactIcon },
    { text: "Redux", image: ReduxIcon },
    { text: "SCSS", image: ScssIcon },
  ],
  description: (
    <p>
      <strong>Cryptographic</strong> lottery/lottery platform, allows the
      purchase of <strong>cryptographic tickets</strong> and win prizes on the
      platform's <strong>own token</strong>.
    </p>
  ),
};

const cuyProject = {
  title: "Cuy",
  image: CuyPicture,
  url: "https://cambios-uruguay-client.limboteams.com/",
  tags: [
    { text: "React", image: ReactIcon },
    { text: "Context", image: ReduxIcon },
    { text: "Tailwind", image: TailwindIcon },
  ],
  description: (
    <p>
      Website for Latin American <strong>exchange houses</strong>, you can
      preview <strong>conversions in real time</strong> and make the exchange
      instantly.
    </p>
  ),
};

const limboScanProject = {
  title: "LimboScan",
  image: LimboScanPicture,
  tags: [
    { text: "Flutter", image: FlutterIcon },
    { text: "Bloc", image: BlocIcon },
  ],
  description: (
    <p>
      <strong>QR code scanner app</strong>, designed to be as{" "}
      <strong>fast</strong> as possible and <strong>without ads</strong>.
    </p>
  ),
};

const limboXtractorProject = {
  title: "LimboXtractor",
  image: LimboXtractoPicture,
  url: "https://drive.google.com/file/d/1ljDeBejHc41I4vEXWrY29WB8aYaROQS_/view?usp=sharing",
  tags: [
    { text: "Flutter", image: FlutterIcon },
    { text: "Bloc", image: BlocIcon },
  ],
  description: (
    <p>
      Practical app made to extract data such as CBU, DNI, phone numbers,
      coordinates, and more.
    </p>
  ),
};

const uposProject = {
  title: "uPOS",
  image: UposPicture,
  tags: [
    { text: "Flutter", image: FlutterIcon },
    { text: "Firebase", image: FirebaseIcon },
    { text: "Provider", image: ProviderIcon },
  ],
  description: (
    <p>
      Point of sale system for restaurants, made with <strong>Flutter</strong>,
      with a <strong>mobile app and a web</strong>. Manage employees, dishes,
      statistics and more.
    </p>
  ),
};

const bgRemoverProject = {
  title: "Background Remover",
  image: BGRemoverPicture,
  url: "/background-remover",
  tags: [
    { text: "React JS", image: FlutterIcon },
    { text: "SCSS", image: ScssIcon },
  ],
  description: (
    <p>
      Tool designed to remove the background from images. It leverages{" "}
      <strong>image processing</strong> techniques to deliver{" "}
      <strong>high-quality</strong> results.
    </p>
  ),
};

export const projectsByFlutterOrder = [
  guatapayProject,
  starWarsProject,
  pokedexProject,
  adamoProject,
  uposProject,
  limboScanProject,
  limboXtractorProject,
  menteRapidaProject,
  adamoWebProject,
  guatapayPlatformProject,
  fmoneyProject,
  cuyProject,
];

export const projectsByDefaultOrder = [
  menteRapidaProject,
  starWarsProject,
  bgRemoverProject,
  limboScanProject,
  adamoWebProject,
  pokedexProject,
  guatapayProject,
  fmoneyProject,
  adamoProject,
  cuyProject,
  uposProject,
  limboXtractorProject,
];

export const projectsByReactOrder = [
  menteRapidaProject,
  adamoWebProject,
  bgRemoverProject,
  fmoneyProject,
  cuyProject,
  guatapayPlatformProject,
  darxprexWebProject,
  guatapayProject,
  starWarsProject,
  pokedexProject,
  adamoProject,
  uposProject,
  limboScanProject,
  limboXtractorProject,
];
