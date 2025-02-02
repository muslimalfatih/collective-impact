"use client";
import { Hero } from "@/components/hero";
import React from "react";
import { ScrollText, ArrowUpRight, Stars } from "lucide-react";
import Card from "@/components/card";
import { Feature } from "@/constant/feature";
import Footer from "@/components/ui/footer-section";
import { makeCampaignActor } from "@/service";
export default function Home() {
  const onSend = async () => {
    const campaign = makeCampaignActor();
    campaign.createCampaign("test", "test", 2);
  };
  const onGet = async () => {
    const campaign = makeCampaignActor();
    const allcampaign = await campaign.getAllCampaigns();
    console.log(allcampaign);
  };
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
            href: "/campaign",
            text: "Browse Campaign",
            icon: <ArrowUpRight className="h-4 w-4" />,
          },
        }}
      />
      <div>
        <button className="" onClick={onSend}>
          Send
        </button>
        <button onClick={onGet}>Get</button>
      </div>
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
