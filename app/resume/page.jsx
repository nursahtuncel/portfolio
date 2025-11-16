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
        value: "Turkish, English ,Arabic,Bahasa Indonesia",
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
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
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
                          <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                            {" "}
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
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
              <TabsContent value="about">About</TabsContent>
              <TabsContent value="education">Education</TabsContent>
              <TabsContent value="skills">Skills</TabsContent>
            </div>
          
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
