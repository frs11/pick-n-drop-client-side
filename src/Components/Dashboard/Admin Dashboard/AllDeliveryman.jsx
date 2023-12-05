import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllDeliveryman = () => {
  const users = useLoaderData();
  const [normalUsers, setNormalUsers] = useState([]);

  useEffect(() => {
    const filter = users.filter((user) => user.role === "deliveryMan");
    setNormalUsers(filter);
  }, [users]);

  return (
    <div>
      <div>
        <table className="table mx-4 mt-3">
          <thead>
            <tr>
              <th className="text-black dark:text-white">Name</th>
              <th className="text-black dark:text-white">Email</th>
              <th className="text-black dark:text-white">Parcel Delivered</th>
              <th className="text-black dark:text-white">Average Rating</th>
            </tr>
          </thead>
          <tbody>
            {normalUsers.map((user) => {
              const delivered = Math.ceil(Math.random() * 9);
              const rating = Math.ceil(Math.random() * 10);

              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{delivered}</td>
                  <td>{rating}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveryman;
