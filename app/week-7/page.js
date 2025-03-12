"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    // Function to handle adding a new item
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
            <h1 className="font-bold text-4xl mb-5">🛒 Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}
