import React, { use } from "react";
import { AuthContext } from "../assets/Context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    // const email = form.email.value;
    // const password = form.password.value;

    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    // console.log(userprofile);
    createUser(email, password)
      .then((result) => {
        const userprofile = {
          email,
          ...rest,
          creationTime: result.user?.metadata.creationTime,
          lastSignInTime: result.user?.metadata.lastSignInTime,
        };

        // Creating User Info to DB
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userprofile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success(
                " Welcome! Your account has been created successfully."
              );
            } else {
              toast.error("🚫 Registration failed. Please try again.");
            }

            console.log("after saving the data", data);
          });

        console.log(result.user);
      })
      .catch((error) => console.log(error.code));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col shadow-2xl shadow-amber-300">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Address</label>
                <input
                  name="address"
                  type="text"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Phone</label>
                <input
                  name="phone"
                  type="text"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Photo URL</label>
                <input
                  name="photoUrl"
                  type="text"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
