import React from "react";
import { GrFormView } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ data, coffeeData, setCoffeeData }) => {
  console.log(data);
  const handleDelete = (_id) => {
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
        // Deleting One Item
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = data.filter((rem) => rem._id !== _id);
              setCoffeeData(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side flex shadow-sm items-center">
        <div>
          <figure>
            <img className="h-64" src={data.photo} alt="Movie" />
          </figure>
        </div>
        <div className="w-full pl-9 flex flex-col gap-5">
          <h2 className="card-title">Name: {data.name}</h2>
          <h2 className="card-title">Category: {data.category}</h2>
          <h2 className="card-title">Price: {data.price}</h2>
        </div>
        <div className="card-actions justify-end  ">
          <div className="join join-vertical flex flex-col gap-4 ">
            <Link to={`/coffee/${data._id}`}>
              <button className="btn join-item rounded-full bg-[#D2B48C] text-white">
                <GrFormView size={35}></GrFormView>
              </button>
            </Link>
            <Link to={`/updateCoffee/${data._id}`}>
              <button className="btn rounded-full join-item bg-[#3C393B] text-white">
                <RiEdit2Fill size={35}></RiEdit2Fill>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(data._id)}
              className="btn join-item rounded-full bg-[#EA4744] text-white"
            >
              <MdDeleteForever size={35}></MdDeleteForever>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
