export interface ExperienceData {
  title: string;
  company: string;
  date: string;
  url: string;
  description: React.ReactNode;
}

export const EXPERIENCES_DATA: ExperienceData[] = [
  {
    title: "Software engineer",
    company: "Litebox",
    date: "Feb 2025 - Present",
    url: "https://litebox.ai",
    description: (
      <p>
        <strong>Full-stack developer</strong> building sophisticated{" "}
        <strong>websites</strong> with complex animations and advanced{" "}
        <strong>design systems</strong>, using <strong>Next.js</strong>. Also
        developing <strong>APIs</strong> with <strong>NestJS</strong> and{" "}
        <strong>Java</strong>, designing <strong>databases</strong> and
        maintaining <strong>AWS infrastructure</strong> using{" "}
        <strong>EC2</strong>, <strong>Lambda</strong>, and <strong>ECR</strong>.
      </p>
    ),
  },
  {
    title: "React JS and Flutter developer",
    company: "LimboTeams",
    date: "July 2021 - Present",
    url: "https://limboteams.com",
    description: (
      <p>
        <strong>Development leader</strong> of a team of frontend programmers,
        in charge of reviewing <strong>Pull Requests</strong> and{" "}
        <strong>making technical decisions</strong>, in addition to
        <strong> day-to-day programming</strong> with both technologies.{" "}
        Developed <strong>mobile applications</strong> in{" "}
        <strong>Flutter</strong> published in app stores,{" "}
        <strong>back-office dashboards</strong> using <strong>React</strong>,
        and <strong>APIs</strong> using <strong>Nest.js</strong>.
      </p>
    ),
  },
  {
    title: "React JS developer",
    company: "ImCreate",
    date: "February 2021 - July 2021",
    url: "https://imcreatestudios.com",
    description: (
      <p>
        Frontend developer in <strong>e-commerce</strong> made with{" "}
        <strong>React JS</strong>, connecting <strong>payment gateways</strong>,
        various <strong>API</strong>'s, responsive design and more.
      </p>
    ),
  },
  {
    title: "Trainee developer",
    company: "Nuwe",
    date: "December 2020 - February 2021",
    url: "https://nuwe.io",
    description: (
      <p>
        First steps in my professional career, I developed as a trainee dev at
        the <strong>startup Nuwe</strong>, a tech event organizer, using{" "}
        <strong>React JS</strong> and <strong>Next JS</strong>.
      </p>
    ),
  },
];
