import { Hero } from "@/components/hero";
import React from "react";
import { ScrollText, ArrowUpRight, Stars } from "lucide-react";
import Card from "@/components/card";
import { Feature } from "@/constant/feature";
import Footer from "@/components/ui/footer-section";
export default function Home() {
  return (
    <div>
      <Hero
        pill={{
          text: "New! Community-Powered Funding",
          href: "/about",
          icon: <Stars className="h-4 w-4" />,
          variant: "default",
          size: "md",
        }}
        content={{
          title: "Crowdfund with Purpose",
          titleHighlight: "Govern with Power",
          description:
            "Leverage decentralized voting to fund and manage social impact initiatives. Built on ICP for speed, security, and community control.",
          primaryAction: {
            href: "#",
            text: "Whitepaper",
            icon: <ScrollText className="h-4 w-4" />,
          },
          secondaryAction: {
            href: "#",
            text: "Browse Campaign",
            icon: <ArrowUpRight className="h-4 w-4" />,
          },
        }}
      />
      <section className="container mx-auto my-10 px-4 md:px-8 lg:px-12">
        <h1 className="text-3xl font-bold mb-10">
          A Trustless, Community-Driven Future
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {Feature.map((item, key) => {
            return (
              <Card key={key} text={item.text} description={item.description} />
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
