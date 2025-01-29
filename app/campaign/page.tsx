import { Badge } from "@/components/ui/badge";
import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col items-start">
              <div>
                <Badge>On Chain Live Campaign</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                  Something new!
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-neutral-500  text-left dark:text-neutral-400">
                  Managing a small business today is already tough.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="bg-neutral-100 rounded-md aspect-video mb-2 dark:bg-neutral-800"></div>
                <h3 className="text-xl tracking-tight">
                  Pay supplier invoices
                </h3>
                <p className="text-neutral-500 text-base dark:text-neutral-400">
                  Our goal is to streamline SMB trade, making it easier and
                  faster than ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
