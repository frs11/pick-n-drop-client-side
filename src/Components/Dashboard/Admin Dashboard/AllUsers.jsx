import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { SiGamemaker } from "react-icons/si";
import { axiosSecure } from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const AllUsers = () => {
  const users = useLoaderData();
  const [normalUsers, setNormalUsers] = useState([]);

  useEffect(() => {
    const filter = users.filter((user) => user.role === "user");
    setNormalUsers(filter);
  }, [users]);
  // console.log(normalUsers);
  const makeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/updateRole?id=${id}&role=admin`)
          .then((res) => {
            console.log(res.data);
            if (res.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "This Person has been promoted to Admin",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const makeDeliveryman = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Delivery Man!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/updateRole?id=${id}&role=deliveryMan`)
          .then((res) => {
            console.log(res.data);
            if (res.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "This Person has become a Delivery man",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div>
      <div>
        <table className="table mx-4 mt-3">
          <thead>
            <tr>
              <th className="text-black dark:text-white">Name</th>
              <th className="text-black dark:text-white">Email</th>
              <th className="text-black dark:text-white">Make Admin</th>
              <th className="text-black dark:text-white">Make Delivery Man</th>
            </tr>
          </thead>
          <tbody>
            {normalUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => makeAdmin(user._id)}
                    className="px-2 py-1 rounded border border-indigo-500 "
                  >
                    <MdAdminPanelSettings />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => makeDeliveryman(user._id)}
                    className="px-2 py-1 rounded border border-indigo-500 "
                  >
                    <SiGamemaker />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
