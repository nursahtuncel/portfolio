"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    title: "Years of experience",
  },
  {
    num: 26,
    title: "Projects completed",
  },
  {
    num: 8,
    title: "Texnologies mastered",
  },
  {
    num: 500,
    title: "Code commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto pt-5">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
               className="flex-1 flex gap-4 justify-center items-center xl:justify-start"
               key={index}>
                <CountUp
                  end={stat.num}
                  duration={2}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <h1 className={'${stats.length >15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80'}>{stat.title}</h1>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
