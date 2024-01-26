import React from 'react'
import './Login.css'

import { Formik } from 'formik';
import * as Yup from "yup";
export default function Login() {

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid email format"),
    password: Yup.string().required("Password is required").min(8, "Password should be at least 8 characters"),
  })

  return (
    <>
    <Formik 
    validationSchema={validationSchema}
    initialValues={{email: "", password: ""}}
    onSubmit={(values) => {
      alert(JSON.stringify(values));
    }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="login-container">
          <div className="form">
            <form noValidate onSubmit={handleSubmit}>
              <span>Login</span>
              <input 
              type="email"
              name="email"
              placeholder="example@email.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="form-control"
              id="email"
              />
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
              <button type="submit">Login</button>
            </form>

          </div>
        </div>
      )}
    </Formik>

    </>
  )
}

