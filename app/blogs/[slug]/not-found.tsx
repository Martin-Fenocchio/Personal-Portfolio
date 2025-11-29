import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-white text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-400 text-lg mb-8">
          The article you're looking for doesn't exist.
        </p>
        <Link
          href="/blogs"
          className="inline-block px-6 py-3 bg-green text-background font-semibold rounded-lg hover:bg-yellow transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

