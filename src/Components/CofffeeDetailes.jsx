import { useLoaderData, useParams } from "react-router";

const CofffeeDetailes = () => {
  const data = useLoaderData();
  //   console.log(data._id);
  const { id } = useParams();
  //   console.log(params);
  const singleCoffee = data.find((coffee) => coffee._id === id);
  const { category, details, name, photo, price, quantity, supplier } =
    singleCoffee;
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col items-center gap-10 hover:scale-125 lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">Name: {name}</h1>
            <h1 className="text-2xl font-bold">Category: {category}</h1>
            <h1 className="text-2xl font-bold">Price: {price}</h1>
            <h1 className="text-2xl font-bold">Details:{details}</h1>
            <h1 className="text-2xl font-bold">Quantity:{quantity}</h1>
            <h1 className="text-2xl font-bold">Supplier:{supplier}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CofffeeDetailes;
