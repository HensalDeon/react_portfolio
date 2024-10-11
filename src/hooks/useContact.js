import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { initialValues, validationSchema } from "../utils/validation";

const useContact = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { resetForm }) => {
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: values.name,
            to_name: "JavaScript Mastery",
            from_email: values.email,
            to_email: "hensal@jsmastery.pro",
            message: values.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            resetForm();
            alert("Thank you. I will get back to you as soon as possible.");
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    },
  });
  return { formik, loading };
};

export default useContact;
