"use client";

import Image from "next/image";
import Link from "next/link";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import { useMemo } from "react";

interface ArticleContentProps {
  content: string;
  headings: Array<{ id: string; text: string; level: number }>;
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  const parsedContent = useMemo(() => {
    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode instanceof Element) {
          if (domNode.name === "pre") {
            const codeNode = domNode.children.find(
              (child) => child instanceof Element && child.name === "code"
            ) as Element | undefined;

            if (codeNode) {
              const codeContent = codeNode.children.map((child, index) => {
                if (child.type === "text") {
                  return <span key={index}>{child.data}</span>;
                }
                if (child instanceof Element) {
                  const childAttribs = child.attribs || {};
                  const childClassName = childAttribs.class || "";
                  const childContent = child.children
                    .map((c) => (c.type === "text" ? c.data : ""))
                    .join("");
                  return (
                    <span key={index} className={childClassName}>
                      {childContent}
                    </span>
                  );
                }
                return null;
              });

              return (
                <pre className="bg-green/20 text-white p-4 rounded-lg overflow-x-auto my-4 not-prose">
                  <code className={`text-white bg-green-500 before:content-none after:content-none`}>
                    {codeContent}
                  </code>
                </pre>
              );
            }
            return domNode;
          }

          if (domNode.name === "code") {
            const isInsidePre =
              domNode.parent instanceof Element &&
              domNode.parent.name === "pre";
            if (!isInsidePre) {
              const codeContent = domNode.children
                .map((child) => {
                  if (child.type === "text") return child.data;
                  if (child instanceof Element && child.children) {
                    return child.children
                      .map((c) => (c.type === "text" ? c.data : ""))
                      .join("");
                  }
                  return "";
                })
                .join("");

              return (
                <code className="bg-green/20 text-white px-1.5 py-0.5 rounded not-prose before:content-none after:content-none">
                  {codeContent}
                </code>
              );
            }
          }

          if (domNode.name === "p" && domNode.children) {
            const hasImage = domNode.children.some(
              (child) => child instanceof Element && child.name === "img"
            );
            if (hasImage) {
              const imgNode = domNode.children.find(
                (child) => child instanceof Element && child.name === "img"
              ) as Element | undefined;

              if (imgNode) {
                const { src, alt } = imgNode.attribs;
                if (src) {
                  return (
                    <div className="relative w-full max-w-full">
                      <Image
                        src={src}
                        alt={alt}
                        width={1200}
                        height={675}
                        className="rounded-lg object-contain w-full h-auto"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        priority={false}
                      />
                    </div>
                  );
                }
              }
            }
          }

          if (domNode.name === "img") {
            const { src, alt } = domNode.attribs;
            if (!src) return domNode;

            return (
              <div className="relative w-full max-w-full">
                <Image
                  src={src}
                  alt={alt}
                  width={1200}
                  height={675}
                  className="rounded-lg border object-contain w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority={false}
                />
              </div>
            );
          }

          if (domNode.name === "a") {
            const { href } = domNode.attribs;
            if (!href) return domNode;

            const linkContent = domNode.children.map((child) => {
              if (child.type === "text") {
                return child.data;
              }
              if (child instanceof Element) {
                return parse(
                  `<${child.name}${Object.entries(child.attribs || {})
                    .map(([key, value]) => ` ${key}="${value}"`)
                    .join("")}>${child.children
                    .map((c) => (c.type === "text" ? c.data : ""))
                    .join("")}</${child.name}>`
                );
              }
              return null;
            });

            const isExternal =
              href.startsWith("http://") ||
              href.startsWith("https://") ||
              href.startsWith("mailto:") ||
              href.startsWith("tel:");

            if (isExternal) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={domNode.attribs?.class || ""}
                >
                  {linkContent}
                </a>
              );
            }

            return (
              <Link href={href} className={domNode.attribs?.class || ""}>
                {linkContent}
              </Link>
            );
          }

          if (domNode.name === "span") {
            const className = domNode.attribs?.class || "";
            return (
              <span className={className}>
                {domNode.children.map((child) => {
                  if (child.type === "text") {
                    return child.data;
                  }
                  if (child instanceof Element) {
                    return parse(
                      `<${child.name}${Object.entries(child.attribs || {})
                        .map(([key, value]) => ` ${key}="${value}"`)
                        .join("")}>${child.children
                        .map((c) => (c.type === "text" ? c.data : ""))
                        .join("")}</${child.name}>`
                    );
                  }
                  return null;
                })}
              </span>
            );
          }
        }
        return domNode;
      },
    };

    return parse(content, options);
  }, [content]);

  return (
    <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-green prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-strong:font-semibold prose-blockquote:border-yellow prose-blockquote:text-gray-300 prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 [&_h2]:text-yellow [&_h4]:text-green [&_h4]:underline [&_h4]:underline-offset-[4px] [&_code]:before:content-none [&_code]:after:content-none">
      {parsedContent}
    </article>
  );
};

export default ArticleContent;
