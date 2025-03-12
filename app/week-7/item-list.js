"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    // Copy & sort items
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "category") return a.category.localeCompare(b.category);
        return 0;
    });

    return (  
        <main className="flex flex-col items-center p-6">
            <div className="mb-6 text-center">
                <p className="text-lg font-semibold">Sort By:</p>
                <div className="flex space-x-4 mt-2">
                    <button 
                        onClick={() => setSortBy("name")} 
                        className={`px-4 py-2 rounded-lg ${sortBy === "name" ? "bg-indigo-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                    >
                        Name
                    </button>
                    <button 
                        onClick={() => setSortBy("category")} 
                        className={`px-4 py-2 rounded-lg ${sortBy === "category" ? "bg-indigo-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                    >
                        Category
                    </button>
                </div>
            </div>

            <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {sortedItems.map((item) => (
                    <li key={item.id}>
                        <Item name={item.name} quantity={item.quantity} category={item.category} />
                    </li>
                ))}
            </ul>
        </main>
    );
}
