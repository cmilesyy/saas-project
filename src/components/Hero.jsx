import arrow from "../assets/images/Arrow.svg";

function Hero() {
  return (
    <section>
      <div className="text-center px-5">
        <h1 className="text-4xl font-semibold pb-3">
          Launch a saas product in style
        </h1>
        <p className="pb-6 text-[#364153]">
          Create a stylish website easy and for everyone - SaaS Platforms,
          Technology Startups and more.{" "}
        </p>
        <div className="flex items-center flex-col px-5 gap-4">
          <button className="bg-black text-white flex items-center gap-2 w-full text-center justify-center rounded-lg py-4">
            Buy Now <img src={arrow} alt="" className="h-4 w-4" />
          </button>
          <button className="bg-[#E2F4F9] w-full  rounded-lg py-4">Preview in Figma</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
