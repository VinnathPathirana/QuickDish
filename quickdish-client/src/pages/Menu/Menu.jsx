import React, { useEffect, useState } from "react";

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  //Loading data
  useEffect(() => {
    //fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    //called the function
    fetchData();
  }, []);

  //Filtering Data based on Category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
  };

  //show all data functions
  const showAll = () =>{
    setFilteredItems(menu);
    setSelectedCategory("all");
  }

  //Sorting based on A-Z , Z-A , Low - High pricing
   const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    //logic
    switch(option){
      case "A-Z":
        sortedItems.sort((a,b) => a.name.localeCompare(b.name))
        break;

      case "Z-A":
        sortedItems.sort((a,b) => b.name.localeCompare(a.name))
        break;

      case "low-to-high":
        sortedItems.sort((a,b) => a.price - b.price)
        break;
       
      case "high-to-low":
          sortedItems.sort((a,b) => b.price - a.price)
          break; 

      
      
      
    }

    setFilteredItems(sortedItems);

   }



  return (
    <div>
      {/* Menu Banner */}
      <div className="max-w-screen-2xl section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col items-center gap-8">
          <div className=" text-center px-4 space-y-7">
            {/* Left */}
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-lg text-[#4A4A4A] mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for moderate cost{" "}
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Menu Shop Section */}
      <div className="section-container"></div>
    </div>
  );
};
