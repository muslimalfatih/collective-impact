import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  ignoreDuringBuilds: true,
  eslint: null,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
