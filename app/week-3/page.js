

import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-10 bg-gradient-to-r from-black-200 to-blue-50 min-h-screen text-center">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-10">🛒 My Shopping List</h1>
      <ItemList />
    </main>
  );
}
