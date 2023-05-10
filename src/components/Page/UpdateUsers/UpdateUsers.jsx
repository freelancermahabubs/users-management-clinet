import React from "react";
import { BiArrowFromRight } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateUsers = () => {
  const loadedUpdateUsers = useLoaderData();
  const { _id, name, email, gender, status } = loadedUpdateUsers;
  const handelSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.defaultradio.value;
    const status = form.status.value;
    // console.log(gender, status);
    // console.log(name, email, male, female, active, inactive);
    const updateUsers = { name, email, gender, status };
    fetch(`https://user-manegment-curd-server.vercel.app/usersm/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Users Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Link className="flex items-center lg:mx-16 mt-12" to="/">
        <BiArrowFromRight className="text-xl" />
        <h3 className="text-xl">All Users</h3>
      </Link>
      <div>
        <div className="text-center my-14 ">
          <h2 className="lg:text-3xl text-xl font-semibold">Update Users</h2>
          <h4 className="text-gray-500">
            Use the Below Form to Update a New Account
          </h4>
        </div>
        <form onSubmit={handelSave} className="w-1/2 mx-auto">
          <div className="mb-6">
            <label
              htmlFor="username-success"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              id="username-success"
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
          </div>
          <div className="">
            <label
              htmlFor="username-error"
              className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={email}
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder="Enter Your Email"
            />
          </div>
          <div className=" flex mt-5 gap-7">
            <h3 className="text-gray-400">Gender</h3>
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value="male"
                defaultValue={gender}
                name="defaultradio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Male
              </label>
            </div>
            <div>
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="female"
                defaultValue={gender}
                name="defaultradio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2  font-medium text-gray-900 "
              >
                Female
              </label>
            </div>
          </div>
          <div className=" mb-5 flex mt-2 gap-7">
            <h3 className="text-gray-400">Status</h3>
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value="active"
                name="status"
                defaultValue={status}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Active
              </label>
            </div>
            <div>
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="inactive"
                defaultValue={status}
                name="status"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2  font-medium text-gray-900 "
              >
                Inactive
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update Users"
            className="text-white cursor-pointer w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsers;
