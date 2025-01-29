import { MDXProvider } from "@mdx-js/react";
import Whitepaper from "@/content/whitepaper.mdx";
import { useMDXComponents } from "@/components/mdx-components";
export default function Page() {
  return (
    <MDXProvider components={useMDXComponents}>
      <Whitepaper />
    </MDXProvider>
  );
}
