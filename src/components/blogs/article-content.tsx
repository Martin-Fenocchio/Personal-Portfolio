"use client";

import Image from "next/image";
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
        if (domNode instanceof Element && domNode.name === "img") {
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
        return domNode;
      },
    };

    return parse(content, options);
  }, [content]);

  return (
    <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-green prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-strong:font-semibold prose-code:text-green prose-code:bg-darkBlue prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-darkBlue prose-pre:border prose-pre:border-yellow prose-pre:text-gray-300 prose-blockquote:border-yellow prose-blockquote:text-gray-300 prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 [&_h2]:text-yellow [&_h4]:text-green [&_h4]:underline [&_h4]:underline-offset-[4px]">
      {parsedContent}
    </article>
  );
};

export default ArticleContent;
