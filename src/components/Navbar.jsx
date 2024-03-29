import SocialMedia from "./SocialMedia";

export default function Navbar() {
  return (
    <nav className="md:h-[15vh] bg-sky-600 text-white flex items-center justify-between md:px-[8%] px-4 py-2">
      <div className="flex items-center">
        <div className="md:h-20 h-10 md:w-20 w-10 rounded-full  overflow-hidden">
          <img className="rounded-full" src="./images/logo.jpg" alt="" />
        </div>
        <h4 className="title md:text-3xl text-xl md:font-bold font-thin ml-4">
          Dista Agency
        </h4>
      </div>
      <SocialMedia />
    </nav>
  );
}
