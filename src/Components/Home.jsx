import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const InitialCoffeeData = useLoaderData();
  const [coffeeData, setCoffeeData] = useState(InitialCoffeeData);
  return (
    <div className="grid grid-cols-2 items-center gap-5">
      {coffeeData.map((data) => (
        <CoffeeCard
          coffeeData={coffeeData}
          setCoffeeData={setCoffeeData}
          key={data._id}
          data={data}
        ></CoffeeCard>
      ))}
    </div>
  );
};

export default Home;
