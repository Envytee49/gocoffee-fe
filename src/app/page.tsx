import { Inter } from "next/font/google";
import Hero from "@/app/_components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "gocoffee",
  description: "A place where you can find amazing coffee shops",
};

const inter = Inter({ subsets: ["latin"] });
export default async function Home() {
  return (
    <>
      <main className={inter.className}>
        <Hero />
        {/* <Services /> */}
      </main>
    </>
  );
}
