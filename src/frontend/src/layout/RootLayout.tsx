import { useLayoutEffect, useRef } from "react";
import { useScrollElevation } from "@/hooks/useScrollElevation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Outlet } from "react-router";
import Navbar from "@/components/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RootLayout() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const elevated = useScrollElevation(0);

  useLayoutEffect(() => {
    ScrollSmoother.get()?.kill();

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 0.5,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <main ref={wrapperRef} className="h-full overflow-hidden">
      <Navbar elevated={elevated} onConnect={() => console.log("connect")} />
      <div ref={contentRef}>
        <Outlet />
        <footer className="border-t border-gray-200 w-full">
          <div className="container mx-auto">
            <ul className="container p-4">
              <li className="text-muted-foreground">
                © {new Date().getFullYear()} Collective Impact by Pilar.
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </main>
  );
}
