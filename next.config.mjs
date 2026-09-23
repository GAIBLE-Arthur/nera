/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Remote placeholder imagery — see the `image` field on each entry in
    // data/solutions.ts for a single place to swap these for brand assets.
    // Keeping the allow-list here means any new remote host must be added
    // deliberately.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
