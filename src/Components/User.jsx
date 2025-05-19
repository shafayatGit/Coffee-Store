import React, { useState } from "react";
import { useLoaderData } from "react-router";
import UsersCard from "./UsersCard";

const User = () => {
  const InitialUserData = useLoaderData();
  const [userData, setUserdata] = useState(InitialUserData);
  //   console.log(userData);
  return (
    <div className="flex flex-col gap-5">
      {InitialUserData.map((data) => (
        <UsersCard
          userData={userData}
          setUserdata={setUserdata}
          data={data}
        ></UsersCard>
      ))}
    </div>
  );
};

export default User;
