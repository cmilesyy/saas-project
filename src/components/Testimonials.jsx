import avatar1 from "../assets/images/avatar1.svg";
import arrowb from "../assets/images/arrowb.svg";

function Testimonials() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="text-center px-5 pb-16 md:flex md:flex-col md:items-center md:justify-center">
          <h3 className="text-sm pt-10 pb-5 ">Testimonials</h3>
          <h2 className="pb-4 text-3xl font-semibold md:text-6xl md:w-[1000px]">
            Trusted by over 5,000+ solopreneurs and teams
          </h2>
          <p className="font-light md:text-lg md:w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-[#E8ECED] rounded-xl p-5 w-80">
          <div className="flex items-center gap-4">
            <img src={avatar1} alt="" />
            <div>
              <h3 className="font-bold">Milla Wilson </h3>
              <p>mulla.com</p>
            </div>
          </div>
          <div className="pt-8 mb-14">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>
        </div>

        <div className="bg-black rounded-xl w-80 mt-5 md:w-[1200px] md:h-auto md:py-20 md:flex md:flex-col md:items-center md:justify-center md:mt-20">
          <div className="text-center text-white py-10 px-2 md:py-0">
            <h2 className="text-3xl font-semibold pb-4 md:text-6xl">Ready to get started?</h2>
            <p className="text-[#E7EBFB] md:text-lg">
              Explore the Components, or upgrade to Pro to instantly unlock all
              items.
            </p>
          </div>
          <div className="text-black px-5 flex flex-col gap-4 md:flex-row md:w-[400px] ">
            <button className="bg-[#6DD1ED] flex items-center gap-2 rounded-xl w-full justify-center py-4 md:w-1/2">
              <span>Buy Now</span> <img src={arrowb} alt="" />{" "}
            </button>
            <button className="bg-[#E2F4F9] rounded-xl w-full py-4 mb-10 md:mb-0 md:w-1/2">Preview in Figma</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
