import { useLoaderData } from "react-router";

const Update_Coffee = () => {
  // const data = useLoaderData()
  const { _id, category, details, name, photo, price, quantity, supplier } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);
    fetch(`http://localhost:5000/updateCoffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Name Field */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl text-black">Name</label>
            <input
              defaultValue={name}
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
              defaultValue={supplier}
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
              defaultValue={category}
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
              defaultValue={quantity}
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
              defaultValue={price}
              name="price"
              type="text"
              className="input w-full"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          {/* Details */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl text-black">Details</label>
            <input
              defaultValue={details}
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
            defaultValue={photo}
            name="photo"
            type="text"
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </fieldset>
        {/* Submit Button */}
        <input
          type="submit"
          value="Update Coffee"
          className="w-full mb-16 text-xl font-medium bg-[#D2B48C] btn"
        ></input>
      </form>
    </div>
  );
};

export default Update_Coffee;
