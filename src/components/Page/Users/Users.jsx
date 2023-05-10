import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
const Users = () => {
  const loadedUsers = useLoaderData();
  // const navigate = useNavigate();
  const [reload, setReload] = useState(null);
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);
  useEffect(() => {
    fetch("https://user-manegment-curd-server.vercel.app/usersm")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [reload]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://user-manegment-curd-server.vercel.app/usersm/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              setReload(new Date().getTime());
            }
          });
      }
    });
  };
  return (
    <div>
      <Link to="/newUsers" className="flex items-center lg:mx-16 mt-12">
        <h3 className="text-xl">New User</h3>
        <FaUserAlt className="text-xl" />
      </Link>
      <div>
        <div className="relative overflow-x-auto mx-auto px-12 mt-14">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  @Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((singleUser, index) => (
                <tr
                  key={singleUser._id}
                  className="bg-white border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{singleUser?.name}</td>
                  <td className="px-6 py-4">{singleUser?.email}</td>
                  <td className="px-6 py-4">{singleUser?.gender}</td>
                  <td className="px-6 py-4">{singleUser?.status}</td>
                  <td className="flex items-center gap-6 mt-5 ml-4">
                    <Link to={`/updateUsers/${singleUser._id}`}>
                      <AiFillEdit />
                    </Link>
                    <button onClick={() => handleDelete(singleUser._id)}>
                      <ImCross />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
