import React from "react";
import { Icon, CollectiveImpactCard } from "./ui/collective-impact-card";
interface I_CardProps {
  text: string;
  description: string;
}
export default function Card(props: I_CardProps) {
  return (
    <div className="border border-black/[0.2] flex flex-col items-start mx-auto p-4 relative w-full">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <CollectiveImpactCard text={props.text} />
      <h2 className="text-black mt-4 text-sm font-light">
        {props.description}
      </h2>
    </div>
  );
}
