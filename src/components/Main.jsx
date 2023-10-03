import home from "../assets/images/home.svg";
import about4 from "../assets/images/About4.svg";
import about5 from "../assets/images/About5.svg";
import vc from "../assets/images/vc.svg";
import headers from "../assets/images/headers.svg";
import blog from "../assets/images/blog.svg";
import arrowb from "../assets/images/arrowb.svg";
import ldImage from "../assets/images/ld-image.svg";
import ldSwitch from "../assets/images/ld-switch.svg";

function Main() {
  return (
    <>
      <section>
        {/* Product Spotlights */}
        <div className="px-10 pt-16 md:grid md:grid-cols-2 lg:px-28">
          <div className="md:flex md:justify-center md:flex-col md:px-36">
            <h2 className="text-3xl font-semibold w-64 pb-4 md:text-6xl md:w-auto">
              Save time and design fast
            </h2>
            <p className="pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img src={home} alt="" className="md:h-[537px]" />
          </div>
        </div>

        <div className="px-10 pt-16 md:grid md:grid-cols-2 lg:px-28">
          <div className="md:flex md:justify-center md:flex-col md:order-2 md:px-32">
            <h2 className="text-3xl font-semibold w-64 pb-4 md:text-6xl md:w-auto">
              Put the spotlight on your product’s features
            </h2>
            <p className="pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex items-center justify-center md:order-1">
            <img src={about4} alt="" className="md:h-[537px]" />
          </div>
        </div>

        <div className="px-10 pt-16 md:grid md:grid-cols-2 lg:px-28">
          <div className="md:flex md:justify-center md:items-center md:flex-col md:px-36">
            <h2 className="text-3xl font-semibold w-64 pb-4 md:text-6xl md:w-auto">
              Put the spotlight on your product’s features
            </h2>
            <p className="pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={about5} alt="" className="md:h-[537px]" />
          </div>
        </div>
      </section>

      {/* Production Ready */}

      <section className="flex flex-col items-center justify-center pt-20">

        <div className="text-center px-5 pb-16">
          <h3 className="text-sm pb-5">Production Ready</h3>
          <h2 className="pb-4 text-3xl font-semibold">
            Showcase some impressive features
          </h2>
          <p className="text-[#364153] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center gap-5 md:grid md:grid-cols-3">

          <div className="bg-[#6DD1ED] rounded-xl h-64 p-6 w-80">
            <h2 className="font-semibold text-2xl pb-3">
              Build for Consistency
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className="bg-[#E8ECED] rounded-xl h-64 p-6 w-80 flex items-center justify-center">
            <img src={vc} alt="" />
          </div>

          <div className="bg-[#E8ECED] rounded-xl h-64 p-6 w-80 flex items-center justify-center">
            <img src={headers} alt="" />
          </div>

          <div className="bg-[#E8ECED] rounded-xl h-64 p-6 w-80 flex flex-col items-center justify-center gap-4">
            <button className="text-sm rounded-xl border border-black px-3 py-3">
              Button Hollow S
            </button>
            <button className="text-sm rounded-xl px-5 py-3 bg-white">
              Button Secondary M
            </button>
            <button className="text-white rounded-xl bg-black px-8 py-4">
              Button Primary XL
            </button>
          </div>

          <div className="bg-[#E8ECED] rounded-xl h-64 p-6 w-80 flex items-center justify-center">
            <img src={blog} alt="" />
          </div>

          <div className="bg-[#6DD1ED] rounded-xl h-64 p-6 w-80">
            <h2 className="font-semibold text-2xl pb-3">Pre-build pages</h2>
            <p className="pb-16">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button className="  flex items-center gap-2 text-center justify-center rounded-lg">
              Try Now <img src={arrowb} alt="" className="h-4 w-4 " />
            </button>
          </div>

        </div>

      </section>

      <section className="mt-20 bg-black text-white">
        <div className="text-center  px-5 pb-16">
          <h3 className="text-sm pt-10 pb-5">Turn on the light</h3>
          <h2 className="pb-4 text-3xl font-semibold">
            Choose between dark and light theme
          </h2>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex items-center justify-center pb-10">
          <img src={ldSwitch} alt="" />
        </div>

        <div className="flex items-center justify-center">
          <img src={ldImage} alt="" className="md:w-[1104px]"/>
        </div>
      </section>
    </>
  );
}

export default Main;
