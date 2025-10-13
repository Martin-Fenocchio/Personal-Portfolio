export interface LibraryData {
  title: string;
  image: string;
  url: string;
  npmJSPackage?: boolean;
  description: React.ReactNode;
}

export const LIBRARIES_DATA: LibraryData[] = [
  {
    title: "Universal Picture",
    image: "/pictures/universal.webp",
    url: "https://pub.dev/packages/universal_picture",
    description: (
      <p>
        A versatile <strong>Flutter library</strong> for rendering images{" "}
        <strong>regardless</strong> of their <strong>format</strong> or
        source. This widget simplifies the process of loading and{" "}
        <strong>displaying images</strong>.
      </p>
    ),
  },
  {
    title: "Render If",
    image: "/pictures/renderif.webp",
    url: "https://pub.dev/packages/renderif",
    description: (
      <p>
        RenderIf is a <strong>Flutter library</strong> designed to make
        your <strong>development process faster</strong>. This library
        provides an <strong>extra boolean parameter</strong>, for several
        common <strong>Flutter widgets</strong>.
      </p>
    ),
  },
  {
    title: "Simple copy",
    image: "/pictures/easycopy.webp",
    url: "https://www.npmjs.com/package/@martin-fenocchio/simple_copy",
    npmJSPackage: true,
    description: (
      <p>
        This is a small npm library for <strong>copying text</strong> to
        the <strong>clipboard</strong>. It's{" "}
        <strong>very simple to use</strong> and works in{" "}
        <strong>web</strong> applications.
      </p>
    ),
  },
  {
    title: "String Helpers",
    image: "/pictures/stringhelpers.webp",
    url: "https://www.npmjs.com/package/@martin-fenocchio/string-helpers",
    npmJSPackage: true,
    description: (
      <p>
        A <strong>lightweight</strong> library for{" "}
        <strong>common string manipulation</strong> tasks 🧠.
      </p>
    ),
  },
];
