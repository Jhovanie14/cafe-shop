import Image from "next/image";
import React from "react";

export default function BrewSection2() {
  return (
    <section id="brew2" className=" flex-1 container mx-auto mb-32 lg:mb-44">
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-8 mb-8 lg:mb-24">
          <span className="max-w-5xl text-5xl text-center text-zinc-800 font-open-sans font-semibold">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </span>
          <p className="text-xl font-open-sans text-center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-x-24 border-r border-amber-600">
          <div className="relative w-96 rounded-2xl">
            <Image
              src="/cup.png"
              alt="Coffee Footer"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-96 h-auto"
            />

            {/* Half of right border (bottom half) */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-px h-1/2 bg-amber-600"></div>

            {/* Half of bottom border (right half) */}
            <div className="hidden lg:block absolute right-0 bottom-0 h-px w-1/2 bg-amber-600"></div>
          </div>
          <p className="text-lg text-center lg:text-start font-open-sans leading-6 tracking-wide text-zinc-700 max-w-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="relative rounded-full">
            <Image
              src="/brews.png"
              alt="Coffee Footer"
              width={600}
              height={600}
              className="object-cover w-[600px] h-auto"
            />
            {/* Half of right border (bottom half) */}
            <div className="hidden lg:block absolute left-0 top-0 w-px h-1/2 bg-amber-600"></div>

            {/* Half of bottom border (right half) */}
            <div className="hidden lg:block absolute left-0 top-0 h-px w-1/2 bg-amber-600"></div>
          </div>
          <div className="flex items-center border-l lg:border-t lg:border-amber-600 pl-6">
            <p className="text-lg text-center lg:text-start font-open-sans tracking-wide leading-7 text-zinc-700 max-w-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
