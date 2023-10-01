import home from "../assets/images/home.svg";

function ImgCarousel() {
  return (
    <div className="flex items-center justify-center flex-col py-5 bg-gradient-to-t from-[#6DD1ED]">
      <h1 className="text-2xl">Image Carousel slot</h1>
      <img src={home} alt="" />
    </div>
  );
}

export default ImgCarousel;
