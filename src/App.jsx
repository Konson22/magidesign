import Services from "./components/Services";
import Header from "./components/Header";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { SOCIALMEDIA } from "./constance";

function App() {
  return (
    <div className="bg-graybg">
      <Navbar />
      <Header />
      <div className="bg-white md:mx-[15%] md:-mt-32">
        <Services />
        <CallToAction />
        <div className="md:w-[35%] w-[85%] mx-auto my-16">
          <h2 className="text-4xl text-primary title text-center">
            تابعونا على
          </h2>
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
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
