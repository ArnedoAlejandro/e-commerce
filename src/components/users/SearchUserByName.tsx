"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchUserByName = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const query = name.trim();

    console.log(query)

    if (query.length === 0) {
      // Si está vacío, vuelve a la ruta original sin query
      router.push("/admin/users");
    } else {
      // Si hay algo, lo agrega como query param
      router.push(`/admin/users?name=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 justify-center items-center"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border-b border-gray-300 focus:border-black/80"
        type="text"
        placeholder="Buscar por nombre"
      />
      <button
        type="submit"
        className="p-2 bg-black/80 text-white rounded hover:bg-black/60 cursor-pointer"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchUserByName;