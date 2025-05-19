import React from "react";

const UsersCard = ({ data, setUserdata, userData }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm shadow-amber-400 items-center">
        <figure>
          <img className="h-44 rounded-2xl" src={data.photoUrl} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {data.name}</h2>
          <h2 className="card-title">Email: {data.email}</h2>
          <h2 className="card-title">Address: {data.address}</h2>
          <h2 className="card-title">Phone: {data.phone}</h2>
          <h2 className="card-title">CreationTime: {data.creationTime}</h2>
          <h2 className="card-title">LastSignInTime: {data.lastSignInTime}</h2>
        </div>
        <div>
          <button className="btn bg-amber-300">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
