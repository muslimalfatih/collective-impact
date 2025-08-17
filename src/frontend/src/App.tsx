import { useLayoutEffect, useRef, useState } from "react";
import { Progress } from "./components/ui/progress";
import { cn } from "./lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    ScrollSmoother.get()?.kill();

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 0.5,
      effects: true,
      smoothTouch: 0.1,
    });

    const st = ScrollTrigger.create({
      start: 0,
      onUpdate: (self) => setScrolled(self.scroll() > 0),
    });

    return () => {
      st.kill();
      smoother.kill();
    };
  }, []);

  return (
    <main ref={wrapperRef} className="h-full overflow-hidden">
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 text-white transition-colors duration-300",
          scrolled ? "bg-white shadow-lg text-black" : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <ul className="flex gap-6 items-center">
            <li className="font-medium">Home</li>
            <li className="font-medium">Campaign</li>
          </ul>
          <button className="px-4 py-1 border rounded-full font-bold cursor-pointer">
            Connect
          </button>
        </div>
      </nav>
      <div ref={contentRef}>
        <section aria-labelledby="hero" className="mx-auto bg-[#012D19]">
          <div className="py-40 w-full mx-auto container p-4 flex flex-col justify-center">
            <h1 className="scroll-m-20 text-white text-4xl font-extrabold tracking-tight text-balance">
              Fund Dreams. Earn Impact. Built on ICP.
            </h1>
            <p className="text-white mt-2 leading-7 [&:not(:first-child)]:mt-6 max-w-3xl">
              Empower innovators, creators, and communities with a
              next-generation crowdfunding platform. Secure, transparent, and
              decentralized on the Internet Computer — where every contribution
              is recorded on-chain and every backer earns proof of their impact.
            </p>

            <div className="mt-4 inline-flex gap-4 items-center">
              <button className="bg-primary text-black font-bold px-6 py-3 rounded-lg hover:opacity-90">
                Start a Campaign
              </button>
              <button className="border border-primary text-primary font-bold px-6 py-3 rounded-lg hover:bg-primary/10">
                Explore Campaigns
              </button>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="top-campaigns"
          className="container mx-auto py-6"
        >
          <h1 id="heading" className="text-3xl font-extrabold p-4">
            Discover fundraisers inspired by what you care about
          </h1>

          <ul className="grid sm:grid-cols-3 grid-rows-2 auto-rows-[minmax(0,1fr)]">
            <li className="sm:row-span-2">
              <article className="bg-white rounded-2xl p-4 h-full flex flex-col">
                <figure className="relative flex-1">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src="https://plus.unsplash.com/premium_photo-1753985633451-91ae0ac80456?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Portrait of Sanne"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">
                    Sanne’s campaign cover image
                  </figcaption>
                  <span className="absolute bottom-2 left-2 bg-black/50 text-white text-xs font-mono py-1 px-2 rounded-full">
                    10k donation
                  </span>
                </figure>

                <header className="mt-3 mb-4">
                  <h2 className="text-lg font-bold">
                    Help Sanne aan een levensreddende nekoperatie (€200.000)
                  </h2>
                </header>

                <div className="mt-2">
                  <Progress value={10} aria-label="Campaign is 10% funded" />
                </div>

                <p className="text-base font-normal mt-2">
                  <data value="1000">$1,000</data> raised
                </p>
              </article>
            </li>

            {[...Array(4)].map((_, i) => (
              <li key={i} className="h-full">
                <article className="bg-white rounded-2xl p-4 h-full flex flex-col">
                  <figure>
                    <img
                      className="rounded-xl aspect-[16/9] w-full object-cover"
                      src="https://plus.unsplash.com/premium_photo-1753985633451-91ae0ac80456?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Portrait of Sanne"
                      loading="lazy"
                    />
                    <figcaption className="sr-only">
                      Sanne’s campaign cover image
                    </figcaption>
                  </figure>

                  <header className="mt-3 mb-4">
                    <h2 className="text-lg font-bold">
                      Help Sanne aan een levensreddende nekoperatie (€200.000)
                    </h2>
                  </header>

                  <div className="mt-2">
                    <Progress value={10} aria-label="Campaign is 10% funded" />
                  </div>

                  <p className="text-base mt-2 font-normal">
                    <data value="1000">$1,000</data> raised
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="featured-topic"
          className="container mx-auto py-6"
        >
          <h1 id="inspired-heading" className="text-3xl font-extrabold p-4">
            Featured topics
          </h1>
        </section>

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

export default App;
