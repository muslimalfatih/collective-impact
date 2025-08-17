import { Progress } from "@/components/ui/progress";
import React from "react";

const Campaigns = () => {
  return (
    <React.Fragment>
      <section aria-labelledby="search bar" className="container mx-auto mt-24">
        <div className="p-4 space-y-2">
          <h1 id="heading" className="text-3xl font-extrabold ">
            Find fundraisers and nonprofits
          </h1>
          <p className="text-muted-foreground">
            Find fundraisers by person’s name, location, title, or keyword
          </p>
        </div>
      </section>
      <section aria-labelledby="campaigns" className="container mx-auto py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-flow-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i} className="h-full list-none">
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

                <p className="text-base mt-2 font-normal">
                  <data value="1000">$1,000</data> raised
                </p>
              </article>
            </li>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Campaigns;
