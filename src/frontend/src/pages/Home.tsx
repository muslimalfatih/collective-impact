import { Progress } from "@/components/ui/progress";
import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <React.Fragment>
      <section aria-labelledby="hero" className="mx-auto bg-[#012D19]">
        <div className="py-18 md:py-40 w-full mx-auto container p-4 flex flex-col justify-center">
          <h1 className="scroll-m-20 text-white text-4xl font-extrabold tracking-tight text-balance">
            Fund Dreams. Earn Impact. Built on ICP.
          </h1>
          <p className="text-white mt-2 leading-7 [&:not(:first-child)]:mt-6 max-w-3xl">
            Empower innovators, creators, and communities with a next-generation
            crowdfunding platform. Secure, transparent, and decentralized on the
            Internet Computer — where every contribution is recorded on-chain
            and every backer earns proof of their impact.
          </p>

          <div className="mt-4 inline-flex gap-4 items-center">
            <Link
              to="/create-campaign"
              className="bg-primary text-black font-bold px-6 py-3 rounded-lg hover:opacity-90"
            >
              Start a Campaign
            </Link>
            <Link
              to="/campaigns"
              className="border border-primary text-primary font-bold px-6 py-3 rounded-lg hover:bg-primary/10"
            >
              Explore Campaigns
            </Link>
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
            <Link to="/campaign">
              <article className="bg-white rounded-2xl p-4 h-full flex flex-col">
                <figure className="relative flex-1">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
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
            </Link>
          </li>

          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="h-full">
              <article className="bg-white rounded-2xl p-4 h-full flex flex-col">
                <figure>
                  <img
                    className="rounded-xl aspect-[16/9] w-full object-cover"
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
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
    </React.Fragment>
  );
}
