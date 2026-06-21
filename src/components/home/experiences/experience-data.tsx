export interface ExperienceData {
  title: string;
  company: string;
  date: string;
  url: string;
  description: React.ReactNode;
}

export const EXPERIENCES_DATA: ExperienceData[] = [
  {
    title: "Tech Lead",
    company: "Litebox",
    date: "Feb 2025 - Present",
    url: "https://litebox.ai",
    description: (
      <p>
        <strong>Tech Lead</strong> leading the technical direction of multiple{" "}
        <strong>software projects</strong>, coordinating development teams and
        defining scalable, maintainable architectures aligned with business
        goals. I work closely with clients and stakeholders on{" "}
        <strong>technical decisions</strong>, planning, estimations, code
        reviews, mentoring, and process improvement. I also contribute to{" "}
        <strong>AI adoption</strong>, integrating tools, automations, and new
        workflows that improve productivity and technical quality.
      </p>
    ),
  },
  {
    title: "Frontend Developer",
    company: "LimboTeams",
    date: "Aug 2021 - Jan 2025",
    url: "https://limboteams.com",
    description: (
      <p>
        Started as a <strong>full-stack developer</strong> across web projects
        and digital products using <strong>React</strong>,{" "}
        <strong>NestJS</strong>, <strong>Node.js</strong>, and the JavaScript
        ecosystem. Later expanded into <strong>Flutter</strong> mobile
        development and app store releases. As the role evolved, I took on{" "}
        <strong>technical leadership</strong> responsibilities, guiding
        developers, supporting onboarding, reviewing code, and helping define
        architecture and development practices.
      </p>
    ),
  },
  {
    title: "Full Stack Developer",
    company: "ImCreate",
    date: "February 2021 - July 2021",
    url: "https://imcreatestudios.com",
    description: (
      <p>
        Full-stack developer working on a large-scale{" "}
        <strong>e-commerce</strong> platform for digital assets, mainly using{" "}
        <strong>Vue.js</strong> on the frontend and <strong>Laravel</strong> on
        the backend. Contributed to core features, user flows, asset
        management, <strong>Stripe</strong> payments, checkout flows, order
        management, and platform maintenance.
      </p>
    ),
  },
  {
    title: "Frontend Developer",
    company: "Nuwe",
    date: "December 2020 - February 2021",
    url: "https://nuwe.io",
    description: (
      <p>
        Volunteer frontend developer at <strong>Nuwe</strong>, a platform that
        combines programming challenges, games, and job opportunities. Built web
        interfaces using <strong>React JS</strong>.
      </p>
    ),
  },
];
