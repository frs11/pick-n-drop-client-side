/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";
import { AuthContext } from "../Context/AuthProvider";
import { axiosSecure } from "../Hooks/useAxios";

const Registration = () => {
  const { createNewUser } = useContext(AuthContext);
  const [userType, setUserType] = useState("user");
  const navigate = useNavigate();
  // console.log(userType);

  const handleUserType = (e) => {
    const SelectedUserType = e.target.value;
    setUserType(SelectedUserType);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userName = form.get("name");
    const image = form.get("photourl");
    const userEmail = form.get("email");
    const userPassword = form.get("password");
    // console.log(userPassword);

    if (userPassword.length < 6) {
      e.target.reset();
      return swal(
        "Password should be more than 6 letters",
        "Please try again",
        "warning"
      );
    } else if (!/[A-Z]/.test(userPassword)) {
      e.target.reset();
      return swal(
        "Password should have at least one capital letter",
        "Please try again",
        "warning"
      );
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(userPassword)) {
      e.target.reset();
      return swal(
        "Password should have at least one special character!",
        "Please try again",
        "warning"
      );
    }
    createNewUser(userEmail, userPassword)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: userName,
          email: userEmail,
          photoURL: image,
          role: userType,
        });
        const userInfo = {
          name: userName,
          email: userEmail,
          role: userType,
        };
        axiosSecure
          .post("/newUsers", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              e.target.reset();
              // console.log(user);
              swal("Congratulations!", "Signed Up Successfully!", "success");
              navigate("/", { replace: true });
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        e.target.reset();
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen pt-12 bg-base-900 dark:bg-slate-500 dark:text-white">
      <Helmet>
        <title>Pick'n Drop | Registration | Register Your Account</title>
      </Helmet>
      <div className="hero-content flex-col w-full md:w-1/2 lg:w-2/6 lg:max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Please Sign Up</h1>
        </div>
        <div className="card w-full py-3 shadow-xl bg-base-100 dark:bg-slate-600">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered dark:bg-slate-700"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered dark:bg-slate-700"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Photo url</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                defaultValue="https://source.unsplash.com/random/200x200/?img=1"
                name="photourl"
                className="input input-bordered dark:bg-slate-700"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered dark:bg-slate-700"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">User Type</span>
              </label>
              <select
                onChange={handleUserType}
                name="user-type"
                placeholder="Select User Type"
                className="border dark:border-none px-2 py-2 dark:bg-slate-700 rounded-md border-gray-300 dark:text-white"
              >
                <option value="User">User</option>
                <option value="deliveryMan">Delivery Man</option>
              </select>
            </div>

            <div className="form-control mt-6">
              <button className="py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-lg ease-in-out duration-300 text-white font-semibold">
                Sign Up
              </button>
            </div>
          </form>
          <span className="text-center dark:text-white">
            Already have an account? Please{" "}
            <Link
              to="/login"
              className=" font-medium hover:underline text-indigo-700 dark:text-indigo-300"
            >
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
