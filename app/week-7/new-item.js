"use client";

import { useState } from "react";

export default function NewItem() {
    // State variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newItem = { name, quantity, category };
        console.log("New Item Added:", newItem);
        alert(`New Item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        // Reset form fields
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-200 to-indigo-300 p-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 space-y-6 backdrop-blur-lg bg-opacity-90 border border-gray-200">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center">🛍️ Add New Item</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Item Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Item Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Enter item name"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow shadow-sm text-gray-800 bg-white"
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Quantity</label>
                        <div className="flex items-center space-x-4">
                            <button 
                                type="button"
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                className="w-12 h-12 flex justify-center items-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-md"
                            >
                                −
                            </button>
                            <span className="text-3xl font-extrabold text-gray-900">{quantity}</span>
                            <button 
                                type="button"
                                onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                                className="w-12 h-12 flex justify-center items-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-all shadow-md"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow shadow-sm text-gray-800 bg-white"
                        >
                            {[
                                "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", 
                                "Canned Goods", "Dry Goods", "Beverages", "Snacks", 
                                "Household", "Other"
                            ].map((cat) => (
                                <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
                    >
                        ✅ Add Item
                    </button>
                </form>
            </div>
        </div>
    );
}
