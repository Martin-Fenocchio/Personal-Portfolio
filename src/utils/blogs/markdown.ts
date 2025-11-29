import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import { ArticleSection } from "./types";
import { visit } from "unist-util-visit";

interface ProcessedMarkdown {
  content: string;
  headings: ArticleSection[];
}

export const processMarkdown = async (
  markdownContent: string
): Promise<ProcessedMarkdown> => {
  const flatHeadings: Array<{ id: string; text: string; level: number }> = [];

  const processor = remark()
    .use(remarkGfm)
    .use(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (tree: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        visit(tree, "heading", (node: any) => {
          if (node.depth >= 2 && node.depth <= 4) {
            const text = node.children
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((child: any) => {
                if (child.type === "text") return child.value;
                if (child.type === "inlineCode") return child.value;
                return "";
              })
              .join("");
            const id = generateAnchorId(text);
            flatHeadings.push({
              id,
              text,
              level: node.depth,
            });
            if (!node.data) {
              node.data = {};
            }
            if (!node.data.hProperties) {
              node.data.hProperties = {};
            }
            node.data.hProperties.id = id;
          }
        });
      };
    })
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify);

  const result = await processor.process(markdownContent);
  const htmlContent = String(result);

  const headings = buildHeadingTree(flatHeadings);

  return {
    content: htmlContent,
    headings,
  };
};

const buildHeadingTree = (
  flatHeadings: Array<{ id: string; text: string; level: number }>
): ArticleSection[] => {
  const tree: ArticleSection[] = [];
  const stack: ArticleSection[] = [];

  flatHeadings.forEach((heading) => {
    const section: ArticleSection = {
      id: heading.id,
      text: heading.text,
      level: heading.level,
      children: [],
    };

    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      tree.push(section);
    } else {
      const parent = stack[stack.length - 1];
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(section);
    }

    stack.push(section);
  });

  return tree;
};

export const parseFrontmatter = (fileContent: string) => {
  return matter(fileContent);
};

const generateAnchorId = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

