import modular from "../assets/images/modular.svg";
import responsive from "../assets/images/responsive.svg";
import ld from "../assets/images/ld.svg";
import professional from "../assets/images/professional.svg";

function Custom() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center bg-black text-white md:py-10">
        <h2 className="text-3xl leading-9 tracking-tighter py-10 w-64 md:w-auto md:text-6xl md:pb-20"> Customize however you want </h2>
        <div className=" md:flex ">
        <div className="flex flex-col items-center justify-center gap-5 pb-8 ">
          <img src={modular} alt="Modular Design Image" className=""/>
          <div className="w-56 ">
          <h3 className="pb-5">Modular Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 pb-8 ">
          <img src={responsive} alt="Responsive Design Image" className=""/>
          <div className="w-56">
          <h3 className="pb-5">Responsive Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 pb-8 ">
          <img src={professional} alt="Professional Design Image" className=""/>
          <div className="w-56">
          <h3 className="pb-5">Professional Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 pb-8 ">
          <img src={ld} alt="ld" className=""/>
          <div className="w-56">
          <h3 className="pb-5">Light and Dark mode</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Custom;
