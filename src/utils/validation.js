import * as Yup from "yup";

export const initialValues = {
    name: "",
    email: "",
    message: "",
};

export const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("name is required"),
    email: Yup.string().trim().email().required("email is required"),
    message: Yup.string().trim().required("message is required"),
});
