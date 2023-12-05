import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { SiGamemaker } from "react-icons/si";

const AllUsers = () => {
  const users = useLoaderData();
  const [normalUsers, setNormalUsers] = useState([]);

  useEffect(() => {
    const filter = users.filter((user) => user.role === "user");
    setNormalUsers(filter);
  }, [users]);
  console.log(normalUsers);
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
                  <MdAdminPanelSettings />
                </td>
                <td>
                  <SiGamemaker />
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
