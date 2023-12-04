import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { axiosSecure } from "../../../Hooks/useAxios";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleNewImage = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosSecure.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log("with image url", res.data);
  };

  return (
    <div className="">
      <Helmet>
        <title>Pick n drop | {user.displayName} | User Profile </title>
      </Helmet>
      <div className="w-full mx-auto my-10">
        <h1 className="text-4xl text-center">
          User{" "}
          <span className="text-violet-500 dark:text-violet-300">Profile</span>
        </h1>
        <div className=" w-2/3 mx-auto rounded-lg">
          <div className="flex justify-center mt-10">
            <img
              className="w-56 rounded border border-violet-500"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://source.unsplash.com/random/200x200/?img=1"
              }
              referrerPolicy="no-referrer"
              alt="user profile pic"
            />
          </div>
          <form
            className="mt-3 ml-4 flex flex-col"
            onSubmit={handleSubmit(handleNewImage)}
          >
            <input {...register("image", { required: true })} type="file" />
            <button
              type="submit"
              className="btn bg-indigo-600 text-white hover:text-black w-max mt-4 border-indigo-600"
            >
              Update
            </button>
          </form>
          <div className="mx-auto w-full lg:w-4/5 bg-base-300 dark:bg-slate-400 p-5 rounded-md shadow mt-10">
            <h1 className="text-lg font-semibold">
              Name:{" "}
              <span className="text-gray-500 dark:text-gray-700">
                {user?.displayName ? user.displayName : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              User ID:{" "}
              <span className="text-gray-500 dark:text-gray-700 text-base">
                {user?.uid ? user.uid : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Email:{" "}
              <span className="text-gray-500 dark:text-gray-700">
                {user?.email ? user.email : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Phone Number:{" "}
              <span className="text-gray-500 dark:text-gray-700">
                {user?.phoneNumber ? user.phoneNumber : "017XXXXXXXX"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Email Verification:{" "}
              <span className="text-gray-500 dark:text-gray-700">
                {user?.emailVerified ? "Verified" : "Not verified yet"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Profile Creation Date:{" "}
              <span className="text-gray-500 dark:text-gray-700 text-base">
                {user?.metadata?.creationTime
                  ? user.metadata?.creationTime
                  : "Unknown"}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
