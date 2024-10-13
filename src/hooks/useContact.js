import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { initialValues, validationSchema } from "../utils/validation";
import toast from "react-hot-toast";

const useContact = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            emailjs
                .send(
                    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: values.name,
                        to_name: "Hensal Deon",
                        from_email: values.email,
                        message: values.message,
                    },
                    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
                )
                .then(
                    () => {
                        setLoading(false);
                        resetForm();
                        toast("Thank you. I will get back to you as soon as possible.", {
                            icon: "👏",
                            style: {
                                borderRadius: "10px",
                                background: "#100d25",
                                color: "#fff",
                            },
                        });
                    },
                    (error) => {
                        setLoading(false);
                        console.error(error);
                        toast("Ahh, something went wrong. Please try again later.", {
                            icon: "☹️",
                            style: {
                                borderRadius: "10px",
                                background: "#100d25",
                                color: "#fff",
                            },
                        });
                    }
                );
        },
    });
    return { formik, loading };
};

export default useContact;
