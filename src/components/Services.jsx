import { SERVICES } from "../constance";

export default function Services() {
  return (
    <div className="md:py-14 py-8 text-center md:my-16">
      <h2 className=" text-5xl mb-4">خدماتنا </h2>
      <div className="grid md:grid-cols-3 grid-cols-2 md: gap-5">
        {SERVICES.map((service) => (
          <div className="md:mb-0 md:p-8 p- mb-4">
            <div className="md:h-16 md:w-16 h-16 w-16 mx-auto">
              <img src={service.image} alt="" />
            </div>
            <h3 className="text-2xl">{service.title}</h3>
            <h3 className="line-clamp-2">{service.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
