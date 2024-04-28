import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { useEffect, useState } from "react";

const Tech = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {isLargeScreen
                ? technologies?.map((technology) => (
                      <div className="w-28 h-28" key={technology.name}>
                          <BallCanvas icon={technology.icon} />
                      </div>
                  ))
                : technologies?.map((technology) => (
                      <Tilt
                          className="w-28 h-28 rounded-full green-pink-gradient shadow-card p-[1px] flex justify-center"
                          key={technology.name}
                      >
                          <div className="w-full h-full bg-tertiary rounded-full p-3">
                              <img
                                  className="object-contain size-full h-full w-full m-auto bg-tertiary rounded-full"
                                  src={technology.icon}
                                  alt={technology.name}
                              />
                          </div>
                      </Tilt>
                  ))}
        </div>
    );
};

const TechSection = SectionWrapper(Tech, "");
export default TechSection;
