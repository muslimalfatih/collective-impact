import SwapCard from "@/components/swap/SwapCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <SwapCard />
      </main>
    </div>
  );
}
