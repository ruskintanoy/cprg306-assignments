

export default function Item({ name, quantity, category }) {
    return (
      <li className="border-2 border-blue-400 bg-blue-50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-lg font-bold text-blue-700">{name}</h3>
        <p className="text-gray-600">Quantity: <span className="font-semibold">{quantity}</span></p>
        <p className="text-gray-500 text-sm">Category: {category}</p>
      </li>
    );
  }
  