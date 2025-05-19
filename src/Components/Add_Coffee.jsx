import React from "react";
import Swal from "sweetalert2";

const Add_Coffee = () => {
  // Handle Add Coffee
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // Old System
    // const name = form.name.value;
    // const supplier = form.supplier.value;
    // const category = form.category.value;
    // const chef = form.chef.value;
    // const taste = form.taste.value;
    // const details = form.details.value;
    // const photo = form.photo.value;
    // console.log(name, supplier, category, chef, taste, details, photo);

    // New System
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // Send this data to DB
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully",
            icon: "success",
            draggable: true,
          });
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-black font-bold text-center mb-7 mt-12">
        Add New Coffee
      </h1>
      <h1 className="text-xl text-gray-800 font-normal text-center px-24">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </h1>
      <p className="mt-16 mb-5 text-3xl text-center">Page details</p>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Name Field */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl text-black">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          {/* Supplier Field */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl text-black">Supplier</label>
            <input
              name="supplier"
              type="text"
              className="input w-full"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          {/* Category */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl text-black">Category</label>
            <input
              name="category"
              type="text"
              className="input w-full"
              placeholder="Enter coffee category"
            />
          </fieldset>
          {/* Quantity */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl text-black">Quantity</label>
            <input
              name="quantity"
              type="text"
              className="input w-full"
              placeholder="Enter coffee Quantity"
            />
          </fieldset>
          {/* Price */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl text-black">Price</label>
            <input
              name="taste"
              type="text"
              className="input w-full"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          {/* Details */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl text-black">Details</label>
            <input
              name="details"
              type="text"
              className="input w-full"
              placeholder="Enter coffee details"
            />
          </fieldset>
        </div>
        {/* Photo */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label text-xl text-black">Photo</label>
          <input
            name="photo"
            type="text"
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </fieldset>
        {/* Submit Button */}
        <input
          type="submit"
          value="Add Coffee"
          className="w-full mb-16 text-xl font-medium bg-[#D2B48C] btn"
        ></input>
      </form>
    </div>
  );
};

export default Add_Coffee;

// https://i.ibb.co/35QhKDND/1.png
// https://i.ibb.co/k2wwDm4M/2.png
// https://i.ibb.co/20Bnsjzg/3.png
// https://i.ibb.co/zTy2xgSc/4.png
// https://i.ibb.co/TDf4pB4S/5.png
// https://i.ibb.co/23WTZzK5/6.png
