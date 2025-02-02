"use client";
import { Hero } from "@/components/hero";
import React, { useState, useEffect } from "react";
import { ScrollText, ArrowUpRight, Stars } from "lucide-react";
import Card from "@/components/card";
import { Feature } from "@/constant/feature";
import Footer from "@/components/ui/footer-section";
import { makeCampaignActor } from "@/service";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState<any>(null);

  useEffect(() => {
    const initActor = async () => {
      const campaignActor = makeCampaignActor();
      setActor(campaignActor);
    };
    initActor();
  }, []);

  const onSend = async () => {
    if (!actor) return;
    try {
      setIsLoading(true);
      await actor.createCampaign("test", "test", 2);
      toast({
        title: "Success",
        description: "Campaign created successfully!",
      });
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast({
        title: "Error",
        description: "Failed to create campaign. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onGet = async () => {
    if (!actor) return;
    try {
      setIsLoading(true);
      const allCampaigns = await actor.getAllCampaigns();
      console.log("All campaigns:", allCampaigns);
      toast({
        title: "Success",
        description: "Campaigns fetched successfully!",
      });
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      toast({
        title: "Error",
        description: "Failed to fetch campaigns. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
      <div className="flex gap-4 justify-center my-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          onClick={onSend}
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Campaign"}
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-50"
          onClick={onGet}
          disabled={isLoading}
        >
          {isLoading ? "Fetching..." : "Get Campaigns"}
        </button>
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
