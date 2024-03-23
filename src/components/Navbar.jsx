import SocialMedia from "./SocialMedia";

export default function Navbar() {
  return (
    <nav className="md:h-[15vh] flex items-center justify-between md:px-[8%] px-4 bg-black text-white py-4">
      <div className="flex items-center">
        <div className="md:h-20 h-10 md:w-20 w-10 rounded-ful overflow-hidden">
          <img src="./images/logo2.jpg" alt="" />
        </div>
        <h4 className="title md:text-3xl text-xl md:font-bold font-thin ml-4">
          Dista <span className="text-secondary">Agency</span>
        </h4>
      </div>
      <SocialMedia />
    </nav>
  );
}
