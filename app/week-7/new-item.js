"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [item, setItem] = useState({ name: "", category: "Produce", quantity: 1 });

    const handleNameChange = (event) => {
        setItem({ ...item, name: event.target.value });
    };

    const handleCategoryChange = (event) => {
        setItem({ ...item, category: event.target.value });
    };

    const handleQuantityChange = (amount) => {
        setItem({ ...item, quantity: Math.max(1, item.quantity + amount) });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { ...item, id: Math.floor(Math.random() * 10000) }; // Generate random ID
        onAddItem(newItem);
        setItem({ name: "", category: "Produce", quantity: 1 });
    };

    return (
        <div className="flex justify-center items-center w-full px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-gray-800 shadow-lg rounded-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-white text-center mb-6">➕ Add a New Item</h2>
                
                {/* Item Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-300 mb-2">Item Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={item.name} 
                        required 
                        onChange={handleNameChange}  
                        className="w-full p-3 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter item name..."
                    />
                </div>

                {/* Quantity */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-300 mb-2">Quantity</label>
                    <div className="flex items-center justify-between bg-gray-900 border border-gray-700 p-3 rounded-lg">
                        <button 
                            onClick={(event) => { event.preventDefault(); handleQuantityChange(-1); }} 
                            disabled={item.quantity === 1} 
                            className="bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white font-bold px-4 py-2 rounded-lg transition-all"
                        >
                            -
                        </button>
                        <span className="text-xl text-white font-bold">{item.quantity}</span>
                        <button 
                            onClick={(event) => { event.preventDefault(); handleQuantityChange(1); }} 
                            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg transition-all"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Category */}
                <div className="mb-6">
                    <label htmlFor="category" className="block text-lg font-semibold text-gray-300 mb-2">Category</label>
                    <select 
                        id="category" 
                        value={item.category} 
                        onChange={handleCategoryChange} 
                        className="w-full p-3 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"]
                            .map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-lg transition-all"
                >
                    ✅ Add Item
                </button>
            </form>
        </div>
    );
}
