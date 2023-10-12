import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";

function Login() {

  const [values, setvalues] = useState({
    email: '', password: ''
  })

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");


  const handleInput = e => {
    const { name, value } = e.target
    setvalues({
      ...values, [name]: value
    })
  }

  const hanleSubmit = e => {
    e.preventDefault()
    setloading(true)
    axios.post('auth/login', values).then(res => {
      if (res.status !== 200) { return seterror(res.response.data) }
    })
  }

  return (
    <div className="conatiner mx-auto h-">
      <div className="container mx-auto max-w-md px-5">
        <div className="mt-16">
          {/* Logo */}
          <div>
            <Link className="">
              <h1 className="text-center font-sans2 text-2xl">greatshop</h1>
            </Link>
          </div>

          {/* des */}
          <div className="mt-16">
            <p className="font-sansM">Login Your Account</p>

            {/* form */}
            <div className="mt-5 flex flex-col gap-5 ">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="py-3 border w-full px-5 text-sm"
                  name='email'
                  value={values.email}
                  onChange={handleInput}
                />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="py-3 border w-full px-5 text-sm"
                  name='password'
                  value={values.password}
                  onChange={handleInput}
                />

                <Link className="absolute top-1/2 -translate-y-1/2 right-3 text-red-500 font-sansM">
                  Forgot?
                </Link>
              </div>

              <div>
                <button className="w-full py-3 bg-black text-white" onClick={hanleSubmit}>
                  Login
                </button>
              </div>
            </div>
          </div>

          {loading && <LoadingComponent />}

          {error && (
            <div className="text-center text-red-500 my-3">{error}</div>
          )}

          {/* Dont  */}
          <Link to="/register" className="text-sm mt-8 block">
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
