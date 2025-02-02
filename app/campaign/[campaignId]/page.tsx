import { Badge } from "@/components/ui/badge";
export default function Page() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col items-start">
              <div>
                <Badge>On Going</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-3xl font-regular text-left">
                  Campaign 1
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-neutral-500  text-left dark:text-neutral-400">
                  Campaign Description
                </p>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
