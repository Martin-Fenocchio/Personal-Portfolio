/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./dist",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactCompiler: true,
};

export default nextConfig;
