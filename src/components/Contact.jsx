import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="md:flex items-center p-10">
      <div className="flex-1"></div>
      <div className="flex-1">
        <form>
          <Input placeholder="Name" />
          <Input placeholder="E-mail or Phone" />
          <Input placeholder="Name" type="textarae" />
          <button className="w-full flex items-center justify-center bg-primary text-white py-3 rounded">
            <FaPaperPlane className="mr-2" />
            التسجيل
          </button>
        </form>
      </div>
    </div>
  );
}

function Input({ placeholder, type = "text" }) {
  return (
    <div className="bg-graybg/20 border mb-5">
      {type === "textarae" ? (
        <textarea
          className="h-[6.5rem] w-full outline-none focus:outline-none focus:border-none bg-transparent border-none px-4"
          type="text"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          className="h-[3.5rem] w-full outline-none focus:outline-none focus:border-none bg-transparent border-none px-4"
          type="text"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
