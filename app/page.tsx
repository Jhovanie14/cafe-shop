import BrewSection from "@/components/brew-section";
import BrewSection2 from "@/components/brew-section2";
import Collection from "@/components/collection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { BottleWine, Clock10, Coffee } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white/70 font-open-sans dark:bg-black">
      <main className="flex-1 container mx-auto">
        <section id="hero" className="max-w-8xl mx-auto py-6 px-8">
          <div className="flex flex-col items-center justify-center space-y-3 mb-12">
            <span className="text-3xl text-amber-700 font-semibold">
              Cafe Landing Page
            </span>

            <h1 className="text-8xl text-zinc-800 md:text-[10rem] text-center">
              Lorem ipsum
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-8 lg:gap-12">
            <div className="col-span-3 lg:col-span-1">
              <div className="flex flex-col mt-12">
                <p className="flex-1 text-sm text-zinc-700 text-center mb-12 lg:mb-24 leading-6 tracking-wide">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <Button className="w-1/2 self-center font-open-sans">
                  Order Now
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center items-center col-span-3 lg:col-span-1">
              <div className="relative -translate-y-10 lg:-translate-y-40">
                <div className="absolute inset-0 h-120px bg-amber-500 rounded-full opacity-30 blur-3xl -z-10 animate-blob animation-delay-2000" />
                <Image
                  src="/cafe.png"
                  alt="Coffee 2"
                  width={500}
                  height={800}
                  className="rounded-2xl object-cover w-[400px] h-[500px] sm:w-[450px] sm:h-[600px]"
                />
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 ">
              <div className="space-y-3 my-12 sm:mb-24">
                <div className="flex items-center bg-background/50 rounded-md rounded-r-3xl w-full lg:w-2/3 space-x-3">
                  <div className="bg-white p-3 rounded-l-md">
                    <BottleWine className=" w-8 h-8 text-amber-700" />
                  </div>
                  <span className="text-sm font-mono text-zinc-700 tracking-tight">
                    65% Less acidity
                  </span>
                </div>
                <div className="flex items-center bg-background/50 rounded-md rounded-r-3xl w-full lg:w-2/3 space-x-3">
                  <div className="bg-white p-3 rounded-l-md">
                    <Coffee className=" w-8 h-8 text-amber-700" />
                  </div>
                  <span className="text-sm font-mono text-zinc-700 tracking-tight">
                    2x more caffine
                  </span>
                </div>
                <div className="flex items-center bg-background/50 rounded-md rounded-r-3xl w-full lg:w-2/3 space-x-3">
                  <div className="bg-white p-3 rounded-l-md">
                    <Clock10 className=" w-8 h-8 text-amber-700" />
                  </div>
                  <span className="text-sm font-mono text-zinc-700 tracking-tight">
                    16-hours stepped
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-12 mt-5">
                <p className="font-open-sans">Price</p>{" "}
                <b className="h-10 bg-black w-px"></b>
                <span className="text-3xl font-open-sans text-amber-700">
                  {" "}
                  $14.99
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BrewSection />
      <BrewSection2 />
      <Collection />
      {/* cart section */}
      <section className=" flex-1 container mx-auto mb-32 lg:mb-44">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center justify-center space-y-8 mb-8 lg:mb-24">
            <span className="max-w-5xl text-5xl text-center text-zinc-800 font-open-sans font-semibold">
              Neque porro quisquam est qui dolorem ipsum
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-2xl">
              <Image
                src="/cafe.png"
                alt="Coffee Footer"
                width={600}
                height={600}
                className="object-cover w-full h-auto rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-lg text-start lg:text-start font-open-sans tracking-wide leading-7 text-zinc-700 max-w-xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>

              <button className="w-1/2 self-start text-xl text-white p-4 font-open-sans bg-foreground rounded-none hover:bg-black/90">
                Explore Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <span className="text-4xl font-open-sans font-semibold">
                The Brew
              </span>
              <p className="text-lg text-start lg:text-start font-open-sans tracking-wide leading-7 text-zinc-700 max-w-xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>

              <button className="w-1/2 self-start text-xl text-white p-4 font-open-sans bg-foreground rounded-none hover:bg-black/90">
                Explore Now
              </button>
            </div>
            <div className="relative rounded-2xl">
              <Image
                src="/cafe.png"
                alt="Coffee Footer"
                width={600}
                height={600}
                className="object-cover w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* what our customer say section */}
      <section id="customers" className=" flex-1 container mx-auto mb-32 lg:mb-44">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center justify-center space-y-8 mb-8 lg:mb-24">
            <span className="max-w-5xl text-5xl text-center text-zinc-800 font-open-sans font-semibold">
              What Our Clients Say
            </span>
            <p className="max-w-3xl text-lg font-open-sans text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/70 shadow-none">
              <CardHeader className="flex items-center">
                <Image
                  src="/john.png"
                  alt="Coffee"
                  width={500}
                  height={500}
                  className="mx-auto border w-48 h-48 rounded-full border-zinc-400 object-contain mb-4"
                />
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="font-open-sans text-zinc-700 text-center leading-7 tracking-wide">
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt."
                </p>
                <span className="mt-6 font-open-sans text-2xl font-semibold text-amber-700">
                  - John Doe
                </span>
              </CardContent>
            </Card>
            <Card className="p-8 bg-white/70 shadow-none">
              <CardHeader className="flex items-center">
                <Image
                  src="/jane.png"
                  alt="Coffee"
                  width={500}
                  height={500}
                  className="mx-auto border w-48 h-48 rounded-full border-zinc-400 object-contain mb-4"
                />
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="font-open-sans text-zinc-700 text-center leading-7 tracking-wide">
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt."
                </p>
                <span className="mt-6 font-open-sans text-2xl font-semibold text-amber-700">
                  - Jane Smith
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* news letter section */}
      <section id="newsletter" className="bg-white py-16">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-center">
              Stay updated with the latest news and offers from our cafe.
            </p>
            <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-zinc-300 p-4 rounded-md w-full md:w-80"
              />
              <button className="bg-amber-500 text-white p-4 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* footer section */}
      <footer className="bg-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} Cafe Landing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
