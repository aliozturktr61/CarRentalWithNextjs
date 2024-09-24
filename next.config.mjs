/** @type {import('next').NextConfig} */
const nextConfig = {
  /* resimlerin sayfaya yüklenebilmesi için resmin geleceği url buraya tanıtılmalı */
  images: { 
    remotePatterns: [
    {
      hostname: "cdn.imagin.studio",
      protocol: "https",
    },
  ],}
};

export default nextConfig;
