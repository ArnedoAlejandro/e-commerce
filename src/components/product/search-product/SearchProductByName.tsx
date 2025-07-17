"use client";

import { useState } from "react";
interface Props {
  onSearch: (name: string) => void;
}

const SearchProductByName = ({ onSearch }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(name.trim());
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

export default SearchProductByName;