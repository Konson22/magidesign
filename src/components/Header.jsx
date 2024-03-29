import { motion } from "framer-motion";

export default function Header() {
  const sendMessage = () => {
    const encodedMessage = encodeURIComponent("hi");
    const confirmationMessage =
      "سيتم توجيهك إلى واتساب. يرجى مشاركة موقعك للتوصيل. هل ترغب في المتابعة؟";
    if (window.confirm(confirmationMessage)) {
      window.location.href =
        "https://wa.me/+249996138485?text=" + encodedMessage;
    }
  };

  const Image = (cName = "md:flex hidden") => (
    <div className={`md:flex-1 ${cName}`}>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:h-[350px] h-[150px] md:w-[350px] w-[150px] rounded-full"
        src="./images/logo.jpg"
        alt=""
      />
    </div>
  );
  return (
    <header className=" bg-sky-600 text-white header flex md:flex-row flex-col items-center justify-center px-[14%] md:py-16 md:h-auto h-[80vh]">
      {Image("md:hidden block")}
      <motion.div
        className="md:w-[60%] md:mr-10 md:mt-0 mt-10"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1
          variants={variants}
          className="md:text-8xl text-4xl font-bold md:text-right text-center"
        >
          مشكلتك انت
        </motion.h1>
        <motion.h1
          variants={variants}
          className="md:text-6xl text-4xl font-thin md:text-right text-center"
        >
          هي مسؤوليتنا نحن
        </motion.h1>
        <div className="flex md:justify-end justify-center mt-6">
          <button
            className="border text-white px-5 py-2 rounded"
            onClick={sendMessage}
          >
            طلب مصمم
          </button>
        </div>
      </motion.div>
      {Image()}
    </header>
  );
}

const variants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.5, staggerChildren: 0.2 },
  },
  exit: { opacity: 0, x: 100 },
};
