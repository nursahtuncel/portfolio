"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns.jsx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: 1,
    category: "Frontend Project",
    title: "Lankastay",
    description:
      "A fast and optimized user interface project built with React and Vite, designed for a modern hotel and accommodation platform.",
    stack: [
      { name: "React" },
      { name: "Vite" },
      { name: "JavaScript" },
      { name: "SCSS" },
    ],
    image: "/lanka.png",
    live: "https://lankastay.vrcel.app",
    github: "https://github.com/nursahtuncel/Lankastay",
  },

  {
    num: 2,
    category: "Frontend Project",
    title: "Shop.Co",
    description:
      "A clean and modern e-commerce front-end built with HTML, CSS, and JavaScript. Includes product listing, product details, and a functional shopping cart.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/shopco.png",
    live: "https://bucolic-platypus-711987.netlify.app/",
    github: "https://github.com/nursahtuncel/Shop.co",
  },
  {
    num: 3,
    category: "Frontend Project",
    title: "Note Keeper",
    description:
      "Basit ve kullanışlı bir not alma uygulaması.Kullanıcılar not ekleyebilir, düzenleyebilir ve silebilir.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/note-keeper.jpg",
    live: "https://note-keeper-sooty.vercel.app/",
    github: "https://github.com/nursahtuncel/Note-Keeper?tab=readme-ov-file",
  },
  {
    num: 4,
    category: "Frontend Project",
    title: "Snake",
    description:
      "Classic Snake Game is a browser-based game where players control a snake to eat food and grow as long as possible. This project helped me practice core game mechanics, animations, and user interactions. The game features keyboard controls, a dynamic scoring system, and responsive design, providing an engaging user experience.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/snake.jpg",
    live: "https://snake-game111.netlify.app/",
    github: "https://github.com/nursahtuncel/Snake",
  },
  {
    num: 5,
    category: "Frontend Project",
    title: "İletmen",
    description:
      "Iletmen is a modern courier service website that showcases how on-demand delivery services operate. The platform presents courier features, pricing information, service areas, and a clean UI that reflects a professional logistics brand",
    stack: [
      { name: "html" },
      { name: "css" },
      { name: "js" },
      { name: "node.js" },
      { name: "react" },
    ],
    image: "/iletmen.jpg",
    live: "https://iletmen.netlify.app/",
    github: "https://github.com/nursahtuncel/iletmen",
  },
  {
    num: 6,
    category: "Frontend Project",
    title: "Film Kutusu",
    description:
      "FilmKutusu is a sleek, responsive web application that allows users to browse, search, and explore a curated catalog of movies. It features detailed movie pages, dynamic filtering, and a clean, user-friendly interface. Built to showcase front-end design and state management skills.",
    stack: [
      { name: "html" },
      { name: "css" },
      { name: "js" },
      { name: "node.js" },
      { name: "react" },
    ],
    image: "/film-kutusu.jpg",
    live: "https://filmkutusu.netlify.app/",
    github: "https://github.com/nursahtuncel/Film-Sitesi",
  },
  {
    num: 7,
    category: "Frontend Project",
    title: "Paylaştıkça",
    description: "Bootstrap kullanılarak yapılmış bir blog sitesi örneğidir.",
    stack: [{ name: "html" }, { name: "css" }, { name: "bootstrap" }],
    image: "/paylastikca.jpg",
    live: "https://app.netlify.com/projects/boostrap-web-site/overview",
    github: "https://github.com/nursahtuncel/bootstrap-website",
  },
  {
    num: 8,
    category: "Frontend Project",
    title: "Amazon Clone",
    description:
      "Bu proje, Amazon’un temel görünümünü taklit eden bir web sayfasıdır.",
    stack: [{ name: "html" }, { name: "css" }],
    image: "/amazon.jpg",
    live: "https://amazon-clone-w.netlify.app/",
    github: "https://github.com/nursahtuncel/Amazon-Clone",
  },
  {
    num: 9,
    category: "Frontend Project",
    title: "Amazon Clone",
    description:
      "Bu proje, Amazon’un temel görünümünü taklit eden bir web sayfasıdır.",
    stack: [{ name: "html" }, { name: "css" }],
    image: "/amazon-clone.png",
    live: "https://amazon-clone-w.netlify.app/",
    github: "https://github.com/nursahtuncel/Amazon-Clone",
  },
  {
    num: 10,
    category: "Frontend Project",
    title: "pokedex guide ",
    description:
      "Bu proje, Amazon’un temel görünümünü taklit eden bir web sayfasıdır.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/pokedex.jpg",
    live: "https://delicate-liger-7ec634.netlify.app/",
    github: "https://github.com/nursahtuncel/pokedex-guide",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.4,
        ease: "easeIn",
        duration: 0.4,
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT SIDE */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold text-white">
                {project.category}
              </h2>
              <h6 className="text-[22px] font-bold text-white m-0">
                {project.title}
              </h6>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ", "}
                  </li>
                ))}
              </ul>

              <div className="border border-white/28"></div>

              {/* BUTTONS */}
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
            >
              {projects.map((p, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[540px]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain"
                    />

                    {/* LEFT CLICK AREA */}
                    <div className="swiper-prev absolute left-0 top-0 h-full w-[40%] cursor-pointer" />

                    {/* RIGHT CLICK AREA */}
                    <div className="swiper-next absolute right-0 top-0 h-full w-[40%] cursor-pointer" />
                  </div>
                </SwiperSlide>
              ))}
              {/* ---- SLIDER BUTTONS BURAYA GELECEK ---- */}
              <WorkSliderBtns
            containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"

                btnStyle="bg-accent hover:bg-accent-hover  
text-primary text-[22px]  w-[44px] h-[44px] flex items-center justify-center transition-all"
                iconStyle="text-[22px]"
              />{" "}
            </Swiper>{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
