"use client";

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-4">
            <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 space-y-6 w-80">
                <h2 className="text-2xl font-bold text-gray-800">Select Quantity</h2>

                <div className="flex items-center space-x-4">
                    <button 
                        onClick={decrement} 
                        disabled={quantity === 1} 
                        className={`transition-all duration-200 w-12 h-12 flex justify-center items-center rounded-full text-white font-bold ${
                            quantity === 1 
                                ? "bg-gray-300 cursor-not-allowed" 
                                : "bg-red-500 hover:bg-red-600"
                        }`}
                    >
                        -
                    </button>

                    <span className="text-3xl font-semibold text-gray-700">{quantity}</span>

                    <button 
                        onClick={increment} 
                        disabled={quantity === 20} 
                        className={`transition-all duration-200 w-12 h-12 flex justify-center items-center rounded-full text-white font-bold ${
                            quantity === 20 
                                ? "bg-gray-300 cursor-not-allowed" 
                                : "bg-green-500 hover:bg-green-600"
                        }`}
                    >
                        +
                    </button>
                </div>

                <p className="text-gray-500 text-sm">
                    You can select a quantity between <strong>1</strong> and <strong>20</strong>.
                </p>
            </div>
        </div>
    );
}