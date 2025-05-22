import { title } from "process";
import React from "react";

const services = [
    {
      id: "01",
      title: "web design ",
      description: "bsjyfvcdjtrgsdjfvdksgukygdfdtfsykdytfdv",
    },
    {
      id: "02",
      title: "SEO optimize ",
      description: "bsjyfvcdjtrgsdjfvdksgukygdfdtfsykdytfdv",
    },
    {
      id: "03",
      title: "Ui/Ux design ",
      description: "bsjyfvcdjtrgsdjfvdksgukygdfdtfsykdytfdv",
    },
    {
      id: "04",
      title: "web design ",
      description: "bsjyfvcdjtrgsdjfvdksgukygdfdtfsykdytfdv",
    },
  ];

const Services = () => {
  

  return (
    <section className="text-white py-20 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-2 mb-12 md:mb-0">
          <h2 className="text-6xl font-extrabold sticky top-20">Services</h2>
        </div>

        <div className="md:w-3/4 mt-10">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-purple-400 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
