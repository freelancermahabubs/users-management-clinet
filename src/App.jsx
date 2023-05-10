import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Users from "./components/Page/Users/Users";

function App() {
  return (
    <div>
      <div className=" ">
        {/* {users.map((singleUser) => (
          <Users
            key={singleUser._id}
            singleUser={singleUser}
            setUsers={setUsers}
            users={users}
          />
        ))} */}
      </div>
    </div>
  );
}

export default App;
