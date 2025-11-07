import StatCircle from "@/components/stat-circle";

export default function BrewSection() {
  return (
    <section id="brew1" className=" flex-1 container mx-auto mb-32 lg:mb-44">
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-8 mb-24 lg:mb-32">
          <span className="text-5xl text-center text-zinc-800 font-open-sans font-semibold">
            Neque porro quisquam est qui dolorem
          </span>
          <p className="text-xl font-open-sans text-center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-8 lg:space-x-16 space-y-16 lg:space-y-0">
          <StatCircle
            value="10K+"
            label="Cups Served"
            arcLength={420}
            rotation={90}
          />
          <StatCircle value="50K+" label="Orders Delivered" arcLength={420} />
          <StatCircle
            value="10K+"
            label="satisfied customers"
            rotation={90}
            arcLength={420}
          />
        </div>
      </div>
    </section>
  );
}
