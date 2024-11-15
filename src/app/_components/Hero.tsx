import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const img = "/hero-main.png";
  return (
    <section
      className="bg-tone-1 text-amber-700"
    >
      <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-left lg:ml-auto">
          <h1 className="bg-white bg-clip-text text-3xl font-extrabold sm:text-5xl">
            Let gocoffee help you find the suitable coffee shop
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
            <Link
              className="block w-full rounded-md border bg-orange-300 px-6 py-3 text-sm font-medium text-amber-700 hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 sm:w-auto transition duration-300 ease-in-out"
              href="/search"
            > 
              Explore
            </Link>
            <Link
              className="block w-full rounded-md border bg-tone-2 px-6 py-3 text-sm font-medium text-white hover:bg-amber-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 sm:w-auto transition duration-300 ease-in-out"
              href="/about"
            >
              About gocoffee
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:ml-16 lg:mr-0 lg:w-1/2">
          <Image
            className="mx-auto lg:mr-0"
            src={img}
            alt="ux-design"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
