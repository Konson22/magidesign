import Services from "./components/Services";
import Header from "./components/Header";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { SOCIALMEDIA } from "./constance";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

function App() {
  const sendMessage = () => {
    const encodedMessage = encodeURIComponent("");
    const confirmationMessage =
      "سيتم توجيهك إلى واتساب. يرجى مشاركة موقعك للتوصيل. هل ترغب في المتابعة؟";
    if (window.confirm(confirmationMessage)) {
      window.location.href =
        "https://wa.me/+249996138485?text=" + encodedMessage;
    }
  };

  return (
    <div className="md:overflow-x-hidden md:bg-gray-200">
      <ScrollToTop />
      <Navbar />
      <Header />
      <div className="bg-white md:mx-[15%] md:-mt-28">
        <Services />
        <CallToAction />
        <div className="md:w-[35%] w-[85%] mx-auto md:my-16 my-10">
          <h2 className="text-4xl text-primary title text-center">
            تابعونا على
          </h2>
          <p className="text-xl text-center">طلب مصمم</p>
          <div className="flex justify-evenly md:text-5xl text-3xl mt-8">
            {SOCIALMEDIA.map((link) => (
              <a
                className="ml-3"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            ))}
            <div className="" onClick={sendMessage}>
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
