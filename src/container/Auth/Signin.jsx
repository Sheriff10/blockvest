import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../Home/components/Header";
import { Link, useNavigate } from "react-router-dom";
import loginPostHandler from "../../utils/authPostHandler";

// Validation schema using Yup
const validationSchema = Yup.object({
   username: Yup.string()
      .required("Userame is required")
      .min(4, "4 Character MIn"),
   password: Yup.string()
      .required("Password required!")
      .min(6, "Password character must be 6 character!"),
});

const Signin = () => {
   // Initial form values
   const initialValues = {
      username: "",
      password: "",
   };
   const navi = useNavigate();

   // Form submission handler
   const onSubmit = async (values) => {
      // Handle form submission logic here
      try {
         const response = await loginPostHandler("/user/signin", values);
         console.log(response)
         navi("/user/dashboard");
      } catch (error) {
         console.log(error);
         if (error.response) alert("Invalid Credential");
      }
   };

   return (
      <>
         <div className="bg-gray-50 min-h-[100vh]">
            <Header />

            <div className="container py-32">
               <div className="col-lg-5 p-3 rounded-xl bg-white shadow text-black mx-auto  my-auto">
                  <div className="text-heading text-center  mb-3">
                     <span className="text-2xl font-bold mb-3">
                        Login to your Blockvest Account
                     </span>
                  </div>
                  <Formik
                     initialValues={initialValues}
                     validationSchema={validationSchema}
                     onSubmit={onSubmit}
                  >
                     <Form>
                        {/* Username */}
                        <div className="form-group mb-3">
                           <label
                              htmlFor="name"
                              className="text-gray-900 text-sm font-bold"
                           >
                              Username
                           </label>
                           <Field
                              type="text"
                              id="username"
                              name="username"
                              className="form-control focus:text-black text-gray-900 focus:bg-gray-200 bg-gray-200 border-0"
                           />
                           <ErrorMessage
                              name="username"
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
                              Passsword
                           </label>
                           <Field
                              type="password"
                              name="password"
                              className="form-control  focus:text-black text-gray-900 focus:bg-gray-200 bg-gray-200 border-0"
                           />
                           <ErrorMessage
                              name="password"
                              component="div"
                              className="text-xs text-red-600"
                           />
                        </div>

                        {/* Submit button */}
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
                        Don't have an account?{" "}
                        <Link to={"/auth/signup"} className="text-pri">
                           Signup
                        </Link>{" "}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Signin;
