import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../Home/components/Header";
import { Link, useNavigate } from "react-router-dom";
import loginPostHandler from "../../utils/authPostHandler";

// Validation schema using Yup
const validationSchema = Yup.object({
   username: Yup.string()
      .required("Name is required")
      .min(4, "4 Character MIn"),
   email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
   country: Yup.string().required("Select Country"),
   password: Yup.string()
      .required("Password required!")
      .min(6, "Password character must be 6 character!"),
});

const Signup = () => {
   const navi = useNavigate();

   // Initial form values
   const initialValues = {
      username: "",
      email: "",
      country: "",
      password: "",
   };

   // Form submission handler
   const onSubmit = async (values) => {
      // Handle form submission logic here
      try {
         const response = await loginPostHandler("/user/signup", values);
         console.log(response);
         navi("/auth/signin");
      } catch (error) {
         console.log(error);
         if (error.response) alert("Invalid Username, Please try a new one");
      }
   };

   return (
      <>
         <div className="bg-gray-950 min-h-[100vh]">
            <Header />

            <div className="container py-32">
               <div className="col-lg-5 p-3 rounded-xl bg-gray-900 text-white mx-auto  my-auto">
                  <div className="text-heading text-center ">
                     <span className="text-2xl font-medium">
                        Create a Blockervest Account
                     </span>
                  </div>
                  <Formik
                     initialValues={initialValues}
                     validationSchema={validationSchema}
                     onSubmit={onSubmit}
                  >
                     <Form>
                        <div className="form-group mb-3">
                           <label
                              htmlFor="name"
                              className="text-gray-300 font-bold"
                           >
                              Username:
                           </label>
                           <Field
                              type="text"
                              id="username"
                              name="username"
                              className="form-control focus:text-white text-gray-400 focus:bg-gray-950 bg-gray-950 border-0"
                           />
                           <ErrorMessage
                              name="username"
                              component="div"
                              className="text-xs text-red-600"
                           />
                        </div>

                        <div className="form-group mb-3">
                           <label
                              htmlFor="name"
                              className="text-gray-300 font-bold"
                           >
                              Email:
                           </label>
                           <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form-control focus:text-white text-gray-400 focus:bg-gray-950 bg-gray-950 border-0"
                           />
                           <ErrorMessage
                              name="email"
                              component="div"
                              className="text-xs text-red-600"
                           />
                        </div>

                        <div className="form-group mb-3">
                           <label
                              htmlFor="name"
                              className="text-gray-300 font-bold"
                           >
                              Country:
                           </label>
                           <Field
                              as="select"
                              id="country"
                              name="country"
                              className="form-select focus:text-white text-gray-400 focus:bg-gray-950 bg-gray-950 border-0"
                           >
                              <option value="" label="Select Country" />
                              <option value="Nigeria" label="Nigeria" />
                              <option value="USA" label="USA" />
                           </Field>
                           <ErrorMessage
                              name="country"
                              component="div"
                              className="text-xs text-red-600"
                           />
                        </div>

                        {/* Password */}
                        <div className="form-group mb-3">
                           <label
                              htmlFor="name"
                              className="text-gray-300 font-bold"
                           >
                              Passsword:
                           </label>
                           <Field
                              type="password"
                              name="password"
                              className="form-control focus:text-white text-gray-400 focus:bg-gray-950 bg-gray-950 border-0"
                           />
                           <ErrorMessage
                              name="password"
                              component="div"
                              className="text-xs text-red-600"
                           />
                        </div>

                        <div>
                           <button
                              type="submit"
                              className="btn bg-cyan-300 w-full"
                           >
                              Submit
                           </button>
                        </div>
                     </Form>
                  </Formik>

                  <div className="cap my-3 font-medium">
                     <span>
                        Already have an account?{" "}
                        <Link to={"/auth/signin"} className="text-cyan-300">
                           Signin
                        </Link>{" "}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Signup;
