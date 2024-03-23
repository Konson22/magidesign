export default function Header() {
  const title = (cName = "md:block hidden") => (
    <div className={`md:w-[40%] md:ml-8 ${cName}`}>
      <h1 className="md:text-7xl text-4xl font-bold text-white md:text-right text-center">
        مشكلتك انت، هي مسؤوليتنا نحن
      </h1>
    </div>
  );
  return (
    <header className="bg-gradient-to-t to-black from-primary/50 md:flex items-center px-[14%] md:py-8 py-20">
      {title()}
      <div className="flex-1  md:h-[75vh] hh-[40vh]">
        <img src="./images/Web-Design-PNG-File.png" alt="" />
      </div>
      {title("md:hidden block")}
    </header>
  );
}
