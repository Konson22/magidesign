import { FaSnapchat, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

function App() {
  const image = (
    src = "./images/graphic-design2.png",
    cName = "md:hidden block mb-11"
  ) => (
    <div className={`md:w-[60%] flex-1 ${cName}`}>
      <img src={src} alt="" />
    </div>
  );
  return (
    <div className=" h-screen flex md:flex-row flex-col items-center justify-center py-10 bg-cyan-950 text-white px-[10%]">
      {image()}
      <div className="md:flex-1 md:text-left text-center">
        <h1 className="md:text-5xl text-2xl">
          Transform Ideas into Reality Just Request Your Designer
        </h1>
        <div className="flex md:justify-normal justify-evenly mt-6">
          {mediaData.map((item) => (
            <div className="md:h-14 h-10 md:w-14 w-10 flex items-center justify-center md:text-3xl text-xl md:mr-5 rounded-full border mdd:bg-cyan-800">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      {image("./images/graphic-design2.png", "md:block hidden")}
    </div>
  );
}

const mediaData = [
  {
    name: "whatsApp",
    url: "",
    icon: <FaWhatsapp />,
  },
  {
    name: "Snapchat",
    url: "",
    icon: <FaSnapchat />,
  },
  {
    name: "Instagram",
    url: "",
    icon: <FaInstagram />,
  },
  {
    name: "Twitter",
    url: "",
    icon: <FaTwitter />,
  },
];

export default App;

/*
1. "Design Excellence, Just a Request Away"
2. "Unleash Creativity: Request Your Designer Today"
3. "Your Vision, Our Expertise: Request a Designer"
4. "Transform Ideas into Reality: Request Your Designer"
5. "Design Tailored to You: Simply Request a Designer"
6. "Design Made Simple: Request Your Designer Now"
7. "Elevate Your Space: Request a Designer Today"
8. "Design Dreams Delivered: Just Request a Designer"
9. "Design That Speaks: Request Your Designer"
10. "Empower Your Vision: Request a Designer Today"
*/
