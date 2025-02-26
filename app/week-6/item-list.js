"use client";

import Item from "./item.js";
import ItemData from "./items.json";
import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    let items = [...ItemData];

    items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return (  
      <main className="flex flex-col items-center p-6 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-gray-300">Sort By:</p>
          <div className="flex space-x-4 mt-2">
            <button 
              onClick={() => setSortBy("name")} 
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                sortBy === "name" 
                ? "bg-indigo-500 text-white shadow-md" 
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Name
            </button>
            <button 
              onClick={() => setSortBy("category")} 
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                sortBy === "category" 
                ? "bg-indigo-500 text-white shadow-md" 
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Category
            </button>
          </div>
        </div>

        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <Item name={item.name} quantity={item.quantity} category={item.category} />
            </li>
          ))}
        </ul>
      </main>
    );
}
