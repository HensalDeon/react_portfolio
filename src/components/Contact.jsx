import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contactInputs } from "../constants";
import useContact from "../hooks/useContact";
const Contact = () => {
    const { formik, loading } = useContact();
    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form onSubmit={formik.handleSubmit} className="mt-12 flex flex-col gap-8">
                    {contactInputs.map((item, index) => (
                        <div key={index}>
                            <label className="flex flex-col relative">
                                <span className="text-white font-medium mb-4">Your {item?.label}</span>
                                {item.type == "textarea" ? (
                                    <textarea
                                        id={item?.name}
                                        name={item?.name}
                                        rows="7"
                                        placeholder={item?.label}
                                        value={formik.values[item.name]}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                    />
                                ) : (
                                    <input
                                        name={item?.name}
                                        type={item?.type}
                                        placeholder={item?.label}
                                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values[item.name]}
                                    />
                                )}
                                {formik.touched[item.name] && formik.errors[item.name] ? (
                                    <span className="has-error">{formik.errors[item.name]}</span>
                                ) : null}
                            </label>
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
