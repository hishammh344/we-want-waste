import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yozbrydxdlcxghkphhtq.supabase.co',
        port: '', // leave empty unless you're using a custom port
        pathname: '/storage/v1/object/public/**', // this allows all public storage paths
      },
    ],
  },
};

export default nextConfig;
