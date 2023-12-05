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
         <div className="bg-white min-h-[100vh]">
            <Header />

            <div className="container py-32">
               <div className="col-lg-5 p-3 rounded-xl bg-white shadow text-black mx-auto  my-auto">
                  <div className="text-heading text-center mb-4 ">
                     <span className="text-2xl font-bold">
                        Create a Blockvest Account
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
                              className="text-gray-900 text-sm font-bold"
                           >
                              Username:
                           </label>
                           <Field
                              type="text"
                              id="username"
                              name="username"
                              className="form-control focus:text-black text-gray-900 focus:bg-gray-50 bg-gray-200 border-0"
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
                              className="text-gray-900 text-sm font-bold"
                           >
                              Email:
                           </label>
                           <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form-control focus:text-black text-gray-900 focus:bg-gray-50 bg-gray-200 border-0"
                           />
                           <ErrorMessage
                              name="email"
                              component="div"
                              className="text-xs text-red-600"
                           />
                        </div>

                        {/* Password */}
                        <div className="form-group mb-3">
                           <label
                              htmlFor="name"
                              className="text-gray-900 text-sm font-bold"
                           >
                              Passsword:
                           </label>
                           <Field
                              type="password"
                              name="password"
                              className="form-control focus:text-black text-gray-900 focus:bg-gray-50 bg-gray-200 border-0"
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
                              className="btn bg-pri text-white w-full"
                           >
                              Submit
                           </button>
                        </div>
                     </Form>
                  </Formik>

                  <div className="cap my-3 font-medium">
                     <span>
                        Already have an account?{" "}
                        <Link to={"/auth/signin"} className="text-pri">
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
