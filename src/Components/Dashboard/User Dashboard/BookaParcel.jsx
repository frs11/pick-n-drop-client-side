import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../Hooks/useAxios";
const BookaParcel = () => {
  const { user } = useContext(AuthContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const calculatePrice = (e) => {
    const parsedValue = parseFloat(e.target.value);
    if (parsedValue <= 1) {
      setTotalPrice(50);
    } else if (parsedValue <= 2 && parsedValue > 1) {
      setTotalPrice(100);
    } else {
      setTotalPrice(150);
    }
  };

  const validateNumber = (number) => {
    const parsedNumber = parseFloat(number);
    if (!isNaN(parsedNumber) && parsedNumber >= 0) {
      return parsedNumber;
    }
    return null;
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("userName");
    const email = form.get("email");
    const phone = form.get("phone");
    const price = form.get("price");
    const ParcelType = form.get("ParcelType");
    const weight = form.get("weight");
    const receiversName = form.get("receiversName");
    const receiversPhone = form.get("receiversPhone");
    const deliveryDate = form.get("deliveryDate");
    const deliveryAddressLt = form.get("deliveryAddressLt");
    const deliveryAddressLg = form.get("deliveryAddressLg");
    const deliveryAddress = form.get("deliveryAddress");
    const status = "Pending";

    let newWeight = validateNumber(weight);

    if (!newWeight) {
      return Swal.fire({
        title: "Warning!",
        text: "Enter a valid Weight",
        icon: "error",
        confirmButtonText: "Ok!",
      });
    } else {
      const Weight = newWeight;
      const Phone = phone;
      const ReceiversPhone = receiversPhone;
      const bookingData = {
        name,
        email,
        Phone,
        price,
        ParcelType,
        Weight,
        receiversName,
        ReceiversPhone,
        deliveryDate,
        deliveryAddress,
        deliveryAddressLt,
        deliveryAddressLg,
        status,
      };
      console.log(bookingData);

      axiosSecure.post("/parcelbooking", bookingData).then((res) => {
        console.log(res?.data);
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Parcel booked successfully",
            icon: "success",
            confirmButtonText: "Exit",
          });
        }
      });

      e.target.reset();
    }
  };
  return (
    <div className="pt-20 pb-36 headerbg text-white">
      <Helmet>
        <title>Pick n Drop | {user.displayName} | Book a Parcel</title>
      </Helmet>
      <h1 className="text-5xl mb-24 font-semibold text-center text-black dark:text-white">
        Book a Parcel
      </h1>
      <div className="w-9/12 mx-auto">
        <form
          onSubmit={handleBooking}
          className="mt-10 text-black dark:text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mx-auto">
            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">User Name</span>
                <input
                  type="text"
                  name="userName"
                  value={user.displayName}
                  required
                  readOnly
                  placeholder="User Name"
                  className="input input-bordered w-full text-gray-500"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">User Email</span>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  required
                  readOnly
                  placeholder="User Email"
                  className="input input-bordered w-full text-gray-500"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Phone</span>
                <input
                  type="number"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="input w-full input-bordered text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Parcel Type</span>
                <input
                  type="text"
                  name="ParcelType"
                  required
                  placeholder="Parcel Type"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Parcel Weight</span>
                <input
                  onChange={calculatePrice}
                  type="number"
                  name="weight"
                  required
                  step="any"
                  placeholder="Parcel Weight (Kg)"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Receivers Name</span>
                <input
                  type="text"
                  name="receiversName"
                  required
                  placeholder="Receivers Name"
                  className="input w-full input-bordered text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Receivers Phone</span>
                <input
                  type="number"
                  name="receiversPhone"
                  required
                  placeholder="Receivers Phone"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Delivery Address</span>
                <input
                  type="text"
                  name="deliveryAddress"
                  required
                  placeholder="Delivery Address"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Delivery Date</span>
                <input
                  type="date"
                  //   onChange={handleDate}
                  name="deliveryDate"
                  required
                  placeholder="Delivery Date"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">
                  Delivery Address (Latitude)
                </span>
                <input
                  type="number"
                  name="deliveryAddressLt"
                  required
                  step="any"
                  placeholder="Delivery Address (Latitude)"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">
                  Delivery Address (Longitude)
                </span>
                <input
                  type="number"
                  name="deliveryAddressLg"
                  required
                  step="any"
                  placeholder="Delivery Address (Longitude)"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Price</span>
                <input
                  type="number"
                  name="price"
                  value={totalPrice}
                  required
                  readOnly
                  step="any"
                  placeholder="Price"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              value="Add Product"
              className="flex items-center justify-center px-2 py-3 bg-violet-600 font-medium text-lg hover:bg-violet-800 text-white ease-in-out duration-300 cursor-pointer w-full mx-auto rounded-lg"
            >
              <MdFormatListBulletedAdd className="text-xl mr-2"></MdFormatListBulletedAdd>{" "}
              Book a Parcel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookaParcel;
