import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './signup.css';
import { Formik, ErrorMessage, Form } from 'formik';

import * as Yup from 'yup';

const Signup = () => {
  return (
    <>
      <Navbar />

      {/* <h1>HELLO, THIS IS LOGIN PAGE</h1> */}

      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          cpassword: '',
          // These are all new defined terms for formik which is not in our form
        }}
        //VALIDATION Via FORMIK & YUP
        validationSchema={Yup.object({
          first_name: Yup.string()
            //This first_name is from Formik and Yup.Object is an object used in Formik
            // This signifies that the first_name must be a string

            .required('First Name is REQUIRED')
            // This signifies that the first_name is required

            .min(2, 'First Name Must Be Atleast 2 Characters Long')
            // This signifies that the first_name Should be atleast 2 characters long

            .max(30, 'First Name Must Be Less or Equal To 30 Characters Long'),
          // This signifies that the first_name Should Less or Equal To 30 Characters Long

          last_name: Yup.string()
            .required('Last Name is REQUIRED')
            .min(2, 'Last Name Must Be Atleast 2 Characters Long')
            .max(30, 'Last Name Must Be Less or Equal To 30 Characters Long'),

          email: Yup.string()
            .required('email is required')
            .min(10, 'Email must be atleast 10 characters long')
            .max(40, ' Email must be no more than 40 characters')
            .email('Email format is invalid'),

          password: Yup.string()
            .required('Password is required')
            .matches(
              /(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!_#$%^&*_-])/,
              'The Password must contail atleast a lower case and upper case letter wih atleast a number and a special character'
            )
            // TRY TO GIVE IT IN SAME ORDER OR ELSE THIS MAY NOT WORK SOMETIMES
            .min(10, 'Password must be atleast 10 characters long')
            .max(40, ' Password must be no more than 40 characters'),

          cpassword: Yup.string()
            .required('Password is required')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
          //This is to match the values in Formik, IT CHECKS THE YUP REFERENCE AND SEES IF THEY MATCH</>
        })}
      >
        <div className="container w-50 mx-auto mt-5">
          <main className="form-signin">
            <form>
              <div className="text-center">
                <img
                  className="mb-4"
                  src="./logo192.png"
                  alt=""
                  width="72"
                  height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              </div>
              <div className="form-floating">
                {/* <Field */}
                <input
                  type="text"
                  className="form-control"
                  id="floatingfirstname"
                  placeholder="firstname"
                  name="first_name"
                />

                <label htmlFor="floatingField">Enter First Name Here</label>
                <ErrorMessage name="first_name">
                  {(msg) => <div style={{ color: 'maroon' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                {/* <Field */}
                <input
                  type="text"
                  className="form-control"
                  id="floatinglastname"
                  placeholder="lastname"
                  name="last_name"
                />

                <label htmlFor="floatingField">Enter Last Name Here</label>
                <ErrorMessage name="last_name">
                  {(msg) => <div style={{ color: 'maroon' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="floatingdate"
                  placeholder="dd/mm/yy"
                />

                <label htmlFor="floatingField">Select Your Date Of Birth</label>
              </div>
              <div className="form-control mb-1">
                <label className="form-floating">
                  {' '}
                  Gender:
                  <div className="d-flex">
                    <div className="form-check ms-5">
                      <input
                        className="form-check-Field"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Male"
                      />

                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Male
                      </label>
                    </div>

                    <div className="form-check">
                      {/* <Field */}
                      <input
                        className="form-check-Field"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Female"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Female
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-Field"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        value="Other"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingField"
                  placeholder="name@example.com"
                  name="email"
                />

                <label htmlFor="floatingField">Email address</label>
                <ErrorMessage name="email">
                  {(msg) => <div style={{ color: 'maroon' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                {/* <Field */}
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label htmlFor="floatingPassword">Password</label>
                <ErrorMessage name="password">
                  {(msg) => <div style={{ color: 'maroon' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingCPassword"
                  placeholder="Confirm Password"
                  name="cpassword"
                />
                <label htmlFor="floatingCPassword">Confirm Password</label>
                <ErrorMessage name="cpassword">
                  {(msg) => <div style={{ color: 'maroon' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="checkbox mb-3">
                <label>
                  {/* <Field */}
                  <input type="checkbox" value="remember-me" /> I accept all the
                  Terms and Conditions
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Register
              </button>
              <br></br>
              <br />
              Already have an account? <Link to="/Login">Sign In Here</Link>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
          </main>
        </div>
      </Formik>
      <Footer />
    </>
  );
};

export default Signup;
