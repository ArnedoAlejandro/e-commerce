

"use client";

const ClearAddressStoreButton = () => {
  const handleClear = () => {
    localStorage.removeItem("adress-store");
    window.location.reload(); // Recarga la página para reflejar el cambio
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleClear}
        className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
      >
        🧹 Borrar dirección almacenada (DEV)
      </button>
    </div>
  );
};

export default ClearAddressStoreButton;