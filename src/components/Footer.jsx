import logoWhite from "../assets/images/logo-white.svg";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col px-5 gap-5 md:flex-row md:justify-between md:px-28 md:py-20">
        <div className="pt-20 pb-3 md:p-0">
          <img src={logoWhite} alt="" />
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-10">
          <div className="">
            <h2 className="font-bold text-lg pb-3">Products</h2>
            <ul className="font-thin">
              <li className="pb-2">What is Launch?</li>
              <li className="pb-2">Pricing</li>
              <li className="pb-2">FAQ</li>
              <li className="pb-2">Contact</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-lg pb-3">Resources</h2>
            <ul className="font-thin">
              <li className="pb-2">Updates</li>
              <li className="pb-2">Community</li>
              <li className="pb-2">Terms and Conditions</li>
              <li className="pb-2">Privacy Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:flex-row ">
            <div>
              <p className="pb-2 text-xl font-semibold">
                Subscribe to our newsletter
              </p>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="rounded-md py-3 px-5 w-full"
              />
            </div>
            {/*required for email validation*/}
            <button className=" bg-[#6DD1ED] rounded-md py-2 px-2 h-20">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="py-3 mt-3 px-5">
        <p className="border-t pt-3 text-sm">© 2023 Launch</p>
      </div>
    </footer>
  );
}

export default Footer;
