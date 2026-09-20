"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const showcaseSites = Array.from({ length: 15 }, (_, index) => ({
  number: String(index + 1).padStart(2, "0"),
  accent: ["violet", "lime", "blue", "coral", "paper"][index % 5],
}));

const marqueeSites = [...showcaseSites, ...showcaseSites];
const birthDate = new Date(2003, 7, 6);

function getAge() {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasNotHadBirthdayThisYear =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

  if (hasNotHadBirthdayThisYear) age -= 1;
  return age;
}

const experience = [
  { period: "2026 — now", role: "Tech Lead", company: "Litebox", detail: "Leading technical direction, delivery, architecture, code review, and AI-assisted workflows across multiple projects." },
  { period: "2025 — 2026", role: "Full-Stack Developer", company: "Litebox", detail: "Building web and backend applications, integrations, performance improvements, and helping establish the team’s AI practices." },
  { period: "2021 — 2025", role: "Full-Stack & Mobile Developer", company: "LimboTeams", detail: "Built products across React, Node, Flutter, React Native, APIs, AWS, crypto, and e-commerce—and grew into a technical lead." },
  { period: "2021", role: "Full-Stack Developer", company: "ImCreate", detail: "Worked on an e-commerce platform for digital assets, including user flows, payments, checkout, and product maintenance." },
  { period: "2020 — 2021", role: "Frontend Developer", company: "Nuwe", detail: "Volunteered on a platform combining programming challenges, games, and career opportunities." },
];

const libraries = [
  { name: "Tailwind Stack", type: "npm package", description: "Stack Tailwind utilities into a single arbitrary class.", url: "https://www.npmjs.com/package/tailwind-stack" },
  { name: "String Helpers", type: "npm package", description: "Small utilities for common string manipulation tasks.", url: "https://www.npmjs.com/package/@martin-fenocchio/string-helpers" },
  { name: "Universal Picture", type: "Flutter package", description: "Render images from different formats and sources in Flutter.", url: "https://pub.dev/packages/universal_picture" },
  { name: "Render If", type: "Flutter package", description: "A conditional rendering helper for common Flutter widgets.", url: "https://pub.dev/packages/renderif" },
  { name: "Simple Copy", type: "npm package", description: "A compact copy-to-clipboard helper for web applications.", url: "https://www.npmjs.com/package/@martin-fenocchio/simple_copy" },
];

interface FeaturedArticle {
  slug: string;
  title: string;
  excerpt?: string;
  readingTime: number;
  publicationDate: string;
  featuredImage?: string;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SocialIcon({ name }: { name: "github" | "linkedin" | "x" }) {
  if (name === "github") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.25 9.25 0 0 1 12 6.36c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>;
  }
  if (name === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.1 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.25 8.9h3.7V20.5h-3.7V8.9Zm6.02 0h3.55v1.59h.05c.5-.95 1.7-1.95 3.5-1.95 3.74 0 4.43 2.51 4.43 5.77v6.19h-3.7V15c0-1.32-.03-3.02-1.8-3.02-1.8 0-2.08 1.44-2.08 2.93v5.59H9.27V8.9Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 2.75h3.68l-8.04 9.19L24 21.25h-7.4l-5.8-5.7-4.99 5.7H2.12l8.6-9.83-9.05-8.67h7.58l5.24 5.22 4.41-5.22Zm-1.29 16.46h2.04L8.14 4.68H5.95L17.61 19.21Z" /></svg>;
}

export default function PortfolioHome({
  featuredArticles,
}: {
  featuredArticles: FeaturedArticle[];
}) {
  const age = getAge();
  const [showScrollNav, setShowScrollNav] = useState(false);

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    const updateScrollNavigation = () => {
      const currentScrollPosition = window.scrollY;
      const isScrollingUp = currentScrollPosition < previousScrollPosition;
      setShowScrollNav(currentScrollPosition > 180 && isScrollingUp);
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", updateScrollNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollNavigation);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousRootColor = root.style.backgroundColor;
    const previousBodyColor = body.style.backgroundColor;

    const updateBounceCanvas = () => {
      const atFooter =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      const canvasColor = atFooter ? "#11110f" : "#f1eee8";

      root.style.backgroundColor = canvasColor;
      body.style.backgroundColor = canvasColor;
    };

    updateBounceCanvas();
    window.addEventListener("scroll", updateBounceCanvas, { passive: true });
    window.addEventListener("resize", updateBounceCanvas);

    return () => {
      root.style.backgroundColor = previousRootColor;
      body.style.backgroundColor = previousBodyColor;
      window.removeEventListener("scroll", updateBounceCanvas);
      window.removeEventListener("resize", updateBounceCanvas);
    };
  }, []);

  return (
    <main className="portfolio-home">
      <nav className={`scroll-nav ${showScrollNav ? "is-visible" : ""}`} aria-label="Scroll navigation">
        <a href="#experience"><i>01</i>Experience</a><a href="#work"><i>02</i>Work</a><a href="#writing"><i>03</i>Writing</a><a href="#teaching"><i>04</i>Teaching</a><a href="#libraries"><i>05</i>Open source</a>
      </nav>
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <Link className="portfolio-mark" href="/" aria-label="Martin Fenocchio home">MF<span>.</span></Link>
        <div className="portfolio-nav-links"><a href="#experience"><i>01</i>Experience</a><a href="#work"><i>02</i>Work</a><a href="#writing"><i>03</i>Writing</a><a href="#teaching"><i>04</i>Teaching</a><a href="#libraries"><i>05</i>Open source</a></div>
        <div className="nav-socials" aria-label="Social links"><a href="https://github.com/Martin-Fenocchio" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon name="github" /></a><a href="https://www.linkedin.com/in/martín-fenocchio-b507a31b2/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a><a href="https://x.com/Novak_Fenocchio" target="_blank" rel="noreferrer" aria-label="X"><SocialIcon name="x" /></a></div>
      </nav>
      <section className="portfolio-hero">
        <p className="eyebrow">{age} years old / Buenos Aires, Argentina</p>
        <div className="hero-grid">
          <h1>
            Hi, I&apos;m Martín.<br />
            <em>I build things</em><br />
            for the web<br />
            <span className="hero-rotating" aria-label="and lead teams">
              <span>and lead teams.</span>
              <span>and teach about AI.</span>
              <span>and keep learning.</span>
              <span>and love the craft.</span>
            </span>
          </h1>
          <div className="hero-aside"><p>I&apos;m a Tech Lead and full-stack developer from Buenos Aires. I enjoy making useful products, helping teams grow, and sharing what I learn along the way.</p><a href="#work" className="text-link">See my work <Arrow /></a></div>
        </div>
        <div className="hero-bottom"><p>Scroll to enter</p><span>01 — 04</span></div><div className="orb orb-one" /><div className="orb orb-two" /><div className="hero-matrix" aria-hidden="true" />
      </section>
      <section className="statement-section" id="approach">
        <p className="eyebrow">A little about me</p>
        <div className="statement-copy"><p className="statement-lead">I like building things that are useful, clear, and a little bit delightful.</p><p className="statement-support">Most days, that means leading technical decisions and building web products. Outside of that, I write, make open-source packages, and teach teams practical ways to use AI.</p></div>
        <div className="capability-list"><span>01 / Web & mobile</span><span>02 / Technical leadership</span><span>03 / AI classes</span><span>04 / Open source</span></div>
      </section>
      <section className="experience-section-new" id="experience"><div className="section-heading"><div><p className="eyebrow">The path so far</p><h2>Places I&apos;ve <em>worked.</em></h2></div><p className="section-intro">A few teams, many different products, and a steady love for learning new parts of the craft.</p></div><div className="experience-list">{experience.map((item) => <article className="experience-row" key={`${item.company}-${item.role}`}><p>{item.period}</p><h3>{item.role}<span>{item.company}</span></h3><p>{item.detail}</p></article>)}</div></section>
      <section className="showcase-section" id="work">
        <div className="section-heading"><div><p className="eyebrow">A growing body of work</p><h2>Built at <em>Litebox.</em></h2></div><p className="section-intro">A living wall of the web experiences I have helped shape at Litebox. New sites will join as the work ships.</p></div>
        <div className="showcase-frame"><div className="showcase-meta"><span>Selected Litebox work</span><span>15 sites / and growing</span></div><div className="site-marquee" aria-label="Litebox website showcase"><div className="site-track">{marqueeSites.map((site, index) => <article className={`site-card ${site.accent}`} key={`${site.number}-${index}`}><div className="browser-chrome"><i /><i /><i /><b>litebox.site/{site.number}</b></div><div className="site-placeholder"><span>Site {site.number}</span><small>First viewport</small><div className="placeholder-shape" /></div></article>)}</div></div><p className="showcase-note">The images above are design placeholders. The motion and framing are ready for real homepage captures.</p></div>
      </section>
      <section className="writing-section" id="writing"><div className="section-heading"><div><p className="eyebrow">Notes from the work</p><h2>Things I&apos;ve<br /><em>written.</em></h2></div><p className="section-intro">Practical notes on web performance, JavaScript, Flutter, and the details that make digital products feel better.</p></div><div className="writing-grid">{featuredArticles.map((article, index) => <Link className="writing-card" href={`/blogs/${article.slug}`} key={article.slug}><span>{String(index + 1).padStart(2, "0")}</span>{article.featuredImage && <div className="writing-image"><Image src={article.featuredImage} alt="" fill sizes="(max-width: 750px) 100vw, 33vw" /></div>}<div className="writing-card-copy"><p className="eyebrow">{new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(article.publicationDate))} / {article.readingTime} min read</p><h3>{article.title} <Arrow /></h3><p>{article.excerpt || "A practical note from my work as a developer."}</p></div></Link>)}</div><Link className="all-writing-link" href="/blogs">See all articles <Arrow /></Link></section>
      <section className="sharing-banner" id="teaching"><div><p className="eyebrow">Teaching AI / Notes</p><h2>Sharing what I <em>learn.</em></h2></div><p>At Litebox, I run practical sessions on AI-assisted development. I also share small discoveries, tools, and ideas as I keep learning.</p><a className="sharing-link" href="https://x.com/Novak_Fenocchio" target="_blank" rel="noreferrer"><SocialIcon name="x" /> Follow on X <Arrow /></a></section>
      <section className="libraries-section-new" id="libraries"><div className="section-heading"><div><p className="eyebrow">Built in public</p><h2>Open-source<br /><em>libraries.</em></h2></div><p className="section-intro">Small packages I made to remove friction for other developers—and for future me.</p></div><div className="libraries-grid">{libraries.map((library, index) => <a className="library-card" href={library.url} target="_blank" rel="noreferrer" key={library.name}><span>0{index + 1}</span><div><p className="eyebrow">{library.type}</p><h3>{library.name} <Arrow /></h3><p>{library.description}</p></div></a>)}<article className="library-card library-card--coming-soon"><span>06</span><div><p className="eyebrow">In progress</p><h3>Always<br />building<span aria-hidden="true">…</span></h3><p>Something new is taking shape. I&apos;ll share it here when it&apos;s ready.</p></div></article></div></section>
      <footer className="portfolio-footer" id="contact"><p className="eyebrow">Get in touch</p><a className="footer-email" href="mailto:fenomartin6@gmail.com">fenomartin6@gmail.com <Arrow /></a><div className="footer-meta"><span>© {new Date().getFullYear()} Martín Fenocchio</span><a href="https://x.com/Novak_Fenocchio" target="_blank" rel="noreferrer">X / Twitter</a><a href="https://www.linkedin.com/in/martín-fenocchio-b507a31b2/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Martin-Fenocchio" target="_blank" rel="noreferrer">GitHub</a></div></footer>
    </main>
  );
}
