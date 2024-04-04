import ContactIcons from "./ContactIcons";
import Navigation from "./Navigation";
import "./Hero.css";
function Hero() {
  return (
    <div className="w-[50vw] flex flex-col h-[100vh] justify-center items-start pl-24 px-4  sticky top-0">
      {/* main heading s  */}
      <div className=" font-[poppins]">
        <h1 className="text-6xl font-bold text-gray-200  ">Yash Kumar</h1>
        <h2 className="text-xl text-rainbow font-semibold text-gray-200 py-4 px-2">
          Fullstack Web Developer
        </h2>
        <p className="my-5 text-[17px] px-2 ">
          I build website end to end using mern tech stack.
        </p>
      </div>
      {/* navbar  */}
      <Navigation />
      {/* social icons */}
      <ContactIcons />
    </div>
  );
}

export default Hero;
