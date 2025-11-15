"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=4731s",
  },
  {
    num: "02",
    title: "Web Development",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=4731s",
  },
  {
    num: "03",
    title: "Web Development",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=4731s",
  },
  {
    num: "04",
    title: "Web Development",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=4731s",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 2.4,
            ease: "easeIn",
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex flex-col justify-between gap-4">
                {/* top */}
                <div className="w-full flex flex-col justify-between items-start gap-5">
                  <div className="group w-full text-5xl flex items-center justify-between font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                    <Link
                      className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      href={service.href}
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>

                  </div>
                  {/* {heading} */}
                  <h1 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h1>
                  {/* {description} */}
                  <p className="text-white/60 ">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
