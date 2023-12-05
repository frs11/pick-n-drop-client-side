import { useLoaderData } from "react-router-dom";

const Allparcels = () => {
  const parcels = useLoaderData();
  return (
    <div>
      <div>
        <table className="table mx-4 mt-3">
          <thead>
            <tr>
              <th className="text-black dark:text-white">Users Name</th>
              <th className="text-black dark:text-white">Phone</th>
              <th className="text-black dark:text-white">Booking Date</th>
              <th className="text-black dark:text-white">Cost</th>
              <th className="text-black dark:text-white">Status</th>
              <th className="text-black dark:text-white">Manage</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel._id}>
                <td>{parcel.name}</td>
                <td>{parcel.Phone}</td>
                <td>{parcel.deliveryDate}</td>
                <td>{parcel.price}</td>
                <td>{parcel.status}</td>
                <td>
                  <button className="px-2 py-px rounded border border-indigo-700">
                    Manage
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

export default Allparcels;
