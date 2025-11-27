import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        <li>
          <Link
            href="/"
            className="hover:text-green transition-colors"
            aria-label="Home"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="text-green">/</span>
        </li>
        <li>
          <Link
            href="/blogs"
            className="hover:text-green transition-colors"
            aria-label="Blogs"
          >
            Blogs
          </Link>
        </li>
        <li>
          <span className="text-green">/</span>
        </li>
        <li className="text-gray-300" aria-current="page">
          Article
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

