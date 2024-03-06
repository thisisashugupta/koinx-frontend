import Image from "next/image";
import Locator from "@/components/Locator";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-left bg-gray-100">
      <Locator />
    </main>
  );
}
