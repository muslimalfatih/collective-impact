import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 relative">
              <img
                src="https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full rounded-lg"
                width="100%"
              />
              <div>
                <div className="flex gap-2 flex-col mb-5">
                  <div className="flex gap-4 flex-col items-start mb-4">
                    <div>
                      <Badge>On Chain Live Campaign</Badge>
                    </div>
                  </div>
                  <h2 className="text-1xl md:text-3xl tracking-tighter max-w-3xl font-regular text-left">
                    Explore Fundraising Campaigns on the ICP Network
                  </h2>
                  <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-neutral-500  text-left dark:text-neutral-400">
                    Discover Innovative Projects Powered by Decentralized
                    Technology
                  </p>
                </div>
                <div className="my-2">
                  <div className="text-1xl md:text-3xl tracking-tighter max-w-3xl font-regular text-left text-green-900 font-bold">
                    US$ 39,773
                  </div>
                  <div className="text-gray-500">raised of US$ 50,000 goal</div>
                </div>
                <Button
                  value="default"
                  className="w-1/2 right-0 absolute bottom-0"
                >
                  Fund This Campaign
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
