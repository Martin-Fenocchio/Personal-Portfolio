export interface BlogData {
  image: string;
  title: string;
  url: string;
  description: React.ReactNode;
}

export const BLOGS_DATA: BlogData[] = [
  {
    image: "/pictures/blog4.webp",
    title: "Understanding JavaScript Primitives and Reference Types in Depth",
    url: "https://medium.com/@martin_feno/understanding-javascript-primitives-and-reference-types-in-depth-ff63b4b5043a",
    description: (
      <p>
        JavaScript is a <strong>dynamic</strong> and{" "}
        <strong>versatile</strong> language, but some of its quirks can be
        puzzling — especially when it comes to how it handles
        <strong>primitives</strong> and <strong>refecence</strong> types.
      </p>
    ),
  },
  {
    image: "/pictures/blog1.webp",
    title: "Boost Your Flutter App's Performance",
    url: "https://medium.com/@martin_feno/boost-your-flutter-apps-performance-with-this-simple-script-55728bff4354",
    description: (
      <p>
        A <strong>javascript script</strong> that I made to detect the{" "}
        <strong>unused libraries</strong> and <strong>assets</strong> to
        save storage and <strong>improve the performance</strong> of an app
      </p>
    ),
  },
  {
    image: "/pictures/blog3.webp",
    title: "7 Shortcuts to improve your productivity in flutter development",
    url: "https://medium.com/@martin_feno/7-shortcuts-for-flutter-development-e1d4dba60708",
    description: (
      <p>
        A <strong>collection</strong> of seven <strong>shortcuts</strong> of
        <strong>visual studio</strong> code to <strong>increase</strong>{" "}
        your <strong>productivity</strong> when you are coding!
      </p>
    ),
  },
  {
    image: "/pictures/blog2.webp",
    title: "Update the number version automatically in a Flutter app",
    url: "https://medium.com/@martin_feno/how-to-update-the-number-version-automatically-in-a-flutter-app-265ed5e3eee4",
    description: (
      <p>
        In this blog I share a <strong>simple script coded</strong> by me to{" "}
        <strong>increase</strong> the <strong>version number</strong> on{" "}
        <strong>each commit</strong>, saving us time.
      </p>
    ),
  },
];
