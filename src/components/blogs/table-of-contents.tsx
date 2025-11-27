"use client";

import { useEffect, useState, useMemo } from "react";
import { ArticleSection } from "../../utils/blogs/types";

interface TableOfContentsProps {
  headings: ArticleSection[];
  activeId?: string;
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const flattenHeadings = (sections: ArticleSection[]): ArticleSection[] => {
    const flattened: ArticleSection[] = [];
    const traverse = (items: ArticleSection[]) => {
      items.forEach((item) => {
        if (item.level <= 3) {
          flattened.push({
            id: item.id,
            text: item.text,
            level: item.level,
          });
          if (item.children && item.children.length > 0) {
            traverse(item.children);
          }
        }
      });
    };
    traverse(sections);
    return flattened;
  };

  const flatHeadings = useMemo(() => flattenHeadings(headings), [headings]);

  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (flatHeadings.length > 0 && !activeId) {
      setActiveId(flatHeadings[0].id);
    }
  }, [flatHeadings, activeId]);

  useEffect(() => {
    if (flatHeadings.length === 0) return;

    const observerOptions = {
      rootMargin: "-20% 0% -35% 0%",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const headingElements = flatHeadings.map((heading) =>
      document.getElementById(heading.id)
    );

    headingElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headingElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [flatHeadings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    id: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick(id);
    }
  };

  if (flatHeadings.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Table of contents"
    >
      <h2 className="text-white font-bold mt-[60px] text-sm mb-4 uppercase tracking-wide">
        Table of contents
      </h2>
      <ul className="space-y-2">
        {flatHeadings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li key={heading.id} className="relative">
              <button
                onClick={() => handleClick(heading.id)}
                onKeyDown={(e) => handleKeyDown(e, heading.id)}
                tabIndex={0}
                aria-label={`Navigate to ${heading.text}`}
                className={`relative flex items-start text-left w-full p-2 rounded-lg transition-all duration-300 ease-out ${
                  isActive
                    ? "bg-green text-background scale-105 shadow-[0_0_20px_rgba(15,255,154,0.5)] translate-x-1"
                    : "text-gray-400 hover:text-white hover:bg-mediumBlue hover:scale-[1.02]"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-300 ease-out`}
                />
                <span className="flex-1 text-sm font-medium line-clamp-2 pl-1">
                  {heading.text}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
