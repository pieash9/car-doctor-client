// import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    console.log(name,email,password)

    createUser(email,password)
    .then(result=>{
        const user = result.user
        // console.log(user)
    })
    .catch(err=>console.log(err))

  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 md:w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center mt-10">Sign Up</h1>
            <div className="card-body">
              <form onSubmit={handleSignUp}>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Signup"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="link-hover text-orange-600 font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
