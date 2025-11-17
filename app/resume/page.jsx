"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./../../components/ui/tooltip";
import { ScrollArea } from "./../../components/ui/scroll-area";
import { icons } from "./../../components/Icons.jsx";
import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";
// about data
const about = [
  {
    title: "About Me",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    info: [
      { fieldName: "Name", value: "John Doe" },
      { fieldName: "Phone", value: "+123 456 789" },
      { fieldName: "Experiens", value: "2+ Years" },
      { fieldName: "Nationality", value: "Turkish" },
      { fieldName: "E-mail", value: "nursahtuncell@gmail.com" },
      { fieldName: "Freelance", value: "Available" },
      {
        fieldName: "Language",
        value: "Turkish, English,Arabic,Bahasa Indonesia",
      },
      { fieldName: "City", value: "New York" },
      { fieldName: "Country", value: "USA" },
    ],
  },
];
const exprience = {
  icon: "",
  title: "My experiens",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  items: [
    {
      company: "Techcombank",
      position: "Software Engineer",
      duration: "2022 - Present",
    },
    {
      company: "Techcombank",
      position: "Software Engineer",
      duration: "2022 - Present",
    },
    {
      company: "Techcombank",
      position: "Software Engineer",
      duration: "2022 - Present",
    },
    {
      company: "hello word",
      position: "Software Engineer",
      duration: "2022 - Present",
    },
    {
      company: "hello word",
      position: "Software Engineer",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  items: [
    {
      institution: "Techcombank",
      degree: "Software Engineer",
      duration: "2022 - Present",
    },
    {
      institution: "hello word",
      degree: "Software Engineer",
      duration: "2022 - Present",
    },
    {
      institution: "hello word",
      degree: "Software Engineer",
      duration: "2022 - Present",
    },
  ],
};

const skills = {
  icon: "",
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  SkillList: [
    {
      icon: <SiJavascript />,
      name: "HTML 5",
    },
    {
      icon: <SiReact />,
      name: "CSS",
    },
    {
      icon: <SiTypescript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "JavaScript",
    },
  ],
};

const Resume = () => {
  //

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 2.4,
        ease: "easeIn",
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>{" "}
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          {/* content */}

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{exprience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {exprience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {exprience.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          {" "}
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[60px]h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {exprience.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          {" "}
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[60px]h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="max-w-[900px] w-full  mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.SkillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group relative overflow-hidden">
                              {/* Icon */}
                              <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                {item.icon}
                              </div>

                              {/* Name (only on hover) */}
                              <p
                                className="absolute bottom-4 opacity-0 translate-y-2 
    group-hover:opacity-100 group-hover:translate-y-0 
    transition-all duration-500 text-sm
  "
                              >
                                {item.name}
                              </p>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about[0].title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about[0].description}
                </p>

                <ul
                  className="
      grid grid-cols-1 xl:grid-cols-2 
      gap-y-6 gap-x-10 
      max-w-[800px] mx-auto xl:mx-0
    "
                >
                  {about[0].info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center w-full gap-x-5 justify-between border-b border-white/10 pb-3"
                    >
                      <span className="text-white/40 text-sm tracking-wide">
                        {item.fieldName}
                      </span>

                      <span className="text-white font-semibold text-base ">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
