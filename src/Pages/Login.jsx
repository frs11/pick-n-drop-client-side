/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthProvider";
import { axiosSecure } from "../Hooks/useAxios";

const Login = () => {
  const { UserLogin, loginWithGoogle } = useContext(AuthContext);
  // const axiosSecure = useAxios();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const userEmail = form.get("email");
    const userPassword = form.get("password");

    UserLogin(userEmail, userPassword)
      .then(() => {
        // const email = { userEmail };
        // axiosSecure.post("/jwt", email).then((res) => {
        //   console.log(res.data);
        //   event.target.reset();
        swal("Congratulations!", "You logged in Successfully!", "success");
        navigate(location?.state ? location.state : "/", { replace: true });
        // });
      })
      .catch((err) => {
        swal(err.message, "Try again", "warning");
        event.target.reset();
        console.log(err.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        // user.role = "user";
        // const { email } = user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          role: "user",
        };
        axiosSecure
          .post("/newUsers", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              // console.log(user);
              swal("Welcome!", "Signed Up Successfully!", "success");
              navigate("/", { replace: true });
            }
            if (res.data.message) {
              // console.log(user);
              swal("Welcome Back!", "Logged in Successfully!", "success");
              navigate("/", { replace: true });
            }
          })
          .catch((err) => console.log(err));

        // axiosSecure.post("/jwt", email).then((res) => {
        //   console.log(res.data);
        //   swal("Congratulations!", "You logged in Successfully!", "success");
        //   navigate(location?.state ? location.state : "/", { replace: true });
        // });
      })
      .catch((err) => {
        swal(err.message, "", "warning");
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-900 dark:text-white dark:bg-slate-500">
      <Helmet>
        <title>Pick'n Drop | Login | Log into your Account</title>
      </Helmet>
      <div className="hero-content flex-col w-full md:w-1/2 lg:w-2/6  lg:max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Please Sign in</h1>
        </div>
        <div className="card w-full py-3 shadow-xl bg-base-100 dark:bg-slate-600">
          <form onSubmit={handleLogin} className="card-body">
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
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered dark:bg-slate-700"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className=" py-2 rounded-md bg-indigo-500 ease-in-out duration-300 hover:bg-indigo-400 hover:text-black text-lg text-white font-semibold">
                Sign In
              </button>
            </div>
          </form>

          <div className=" my-2 px-8 w-full ">
            <p className="text-sm text-gray-700 mb-3 ml-3 dark:text-white">
              You can also login using Google
            </p>
            <button
              onClick={handleGoogleLogin}
              className="py-2 rounded-md w-full border border-indigo-500 ease-in-out duration-300 hover:bg-indigo-300 hover:text-black font-semibold"
            >
              <span className="flex justify-center items-center">
                <p className="mr-2">Sign in with </p>
                <FcGoogle></FcGoogle>
                <span className="ml-1">Google</span>
              </span>
            </button>
          </div>

          <span className="text-center">
            New to this website? Please{" "}
            <Link
              to="/registration"
              className=" hover:underline font-medium text-indigo-700 dark:text-indigo-300"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
