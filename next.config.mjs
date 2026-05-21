/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática para desplegar como Static Site en Render
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
