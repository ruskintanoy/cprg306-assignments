export default function Item({ name, quantity, category }) {

    // const { name, quantity, category } = props;

    // const name = props.name;
    // const quantity = props.quantity;
    // const category = props.category;
    
    return (
        <section className="bg-gray-800/80 shadow-lg rounded-xl p-4 max-w-sm border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl">
            <ul>
                <li className="font-bold text-xl text-white">{name}</li>
                <div className="text-gray-300 text-sm mt-1">
                    Buy <span className="font-semibold text-indigo-300">{quantity}</span> in 
                    <span className="ml-1 px-2 py-1 rounded bg-indigo-600/50 text-indigo-200 text-xs">{category}</span>
                </div>
            </ul>
        </section>
    );
}