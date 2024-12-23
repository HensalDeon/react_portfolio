/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

export const ServiceCard = ({ index, title, icon }) => (
    <Tilt
        className="xs:w-[250px] w-full"
        options={{
            max: 30,
            scale: 1,
            speed: 50,
        }}
    >
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);

ServiceCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
            >
                I&#39;m a skilled software developer adept at creating and optimizingweb applications. Proficient in
                Node.js, Express.js, MongoDB, and React.js. I&#39;m a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve real-world problems. Let&#39;s work
                together to bring your ideas to life!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
