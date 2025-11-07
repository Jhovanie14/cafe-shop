import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Collection() {
  return (
    <section
      id="collection"
      className=" flex-1 container mx-auto mb-32 lg:mb-44"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-8 mb-8 lg:mb-24">
          <span className="max-w-5xl text-5xl text-center text-zinc-800 font-open-sans font-semibold">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </span>
          <p className="max-w-3xl text-lg font-open-sans text-center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
        <Card className="bg-white/70 p-0 bg-card-0 shadow-none">
          <CardHeader className="text-2xl font-open-sans text-amber-700 mb-4 p-0">
            <Image
              src="/cafe.png"
              alt="Coffee"
              width={500}
              height={500}
              className="border border-zinc-400 w-full object-contain rounded-2xl"
            />
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="font-open-sans font-bold text-2xl text-zinc-700">
              Mocha Fix
            </p>
            <p className="font-open-sans text-sm text-zinc-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            </p>
          </CardContent>
          <CardFooter className="pb-5 flex items-center justify-around md:px-8 lg:px-16">
            <p className="text-xl font-open-sans font-medium text-amber-600">
              $8.00
            </p>
            <Button
              className="font-open-sans text-lg md:text-xl rounded-none"
              size="lg"
            >
              Order Now
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-white/70 p-0 bg-card-0 shadow-none">
          <CardHeader className="text-2xl font-open-sans text-amber-700 mb-4 p-0">
            <Image
              src="/cafe.png"
              alt="Coffee"
              width={500}
              height={500}
              className="border border-zinc-400 w-full object-contain rounded-2xl"
            />
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="font-open-sans font-bold text-2xl text-zinc-700">
              Mocha Fix
            </p>
            <p className="font-open-sans text-sm text-zinc-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            </p>
          </CardContent>
          <CardFooter className="pb-5 flex items-center justify-around md:px-8 lg:px-16">
            <p className="text-xl font-open-sans font-medium text-amber-600">
              $8.00
            </p>
            <Button
              className="font-open-sans text-lg md:text-xl rounded-none"
              size="lg"
            >
              Order Now
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-white/70 p-0 bg-card-0 shadow-none">
          <CardHeader className="text-2xl font-open-sans text-amber-700 mb-4 p-0">
            <Image
              src="/cafe.png"
              alt="Coffee"
              width={500}
              height={500}
              className="border border-zinc-400 w-full object-contain rounded-2xl"
            />
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="font-open-sans font-bold text-2xl text-zinc-700">
              Mocha Fix
            </p>
            <p className="font-open-sans text-sm text-zinc-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            </p>
          </CardContent>
          <CardFooter className="pb-5 flex items-center justify-around md:px-8 lg:px-16">
            <p className="text-xl font-open-sans font-medium text-amber-600">
              $8.00
            </p>
            <Button
              className="font-open-sans text-lg md:text-xl rounded-none"
              size="lg"
            >
              Order Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
