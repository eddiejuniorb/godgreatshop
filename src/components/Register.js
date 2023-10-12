import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";

function Register() {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    axios.post("auth/register", { fullname, email, password, }).then((res) => {
      setloading(false);

      if (res.status !== 200) {
        return seterror(res.response.data)
      }
      return navigate('/login')
    });
  };

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
            <p className="font-sansM">Register an Account</p>

            {/* form */}
            <div className="mt-5 flex flex-col gap-5 ">
              <div>
                <input
                  type="text"
                  value={fullname}
                  placeholder="Full Name"
                  className="py-3 border w-full px-5 text-sm"
                  onChange={(e) => {
                    setfullname(e.target.value);
                  }}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  className="py-3 border w-full px-5 text-sm"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  className="py-3 border w-full px-5 text-sm"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>

              <div>
                <button
                  className="w-full py-3 bg-black text-white"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </div>
          </div>

          {loading && <LoadingComponent />}

          {error && (
            <div className="text-center text-red-500 my-3">{error}</div>
          )}

          {/* Dont  */}
          <Link to="/login" className="text-sm mt-8 block">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
