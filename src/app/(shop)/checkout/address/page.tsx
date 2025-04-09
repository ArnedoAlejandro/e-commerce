import Link from 'next/link';
import TitleMenu from '@/components/ui/top-menu/title/TitleMenu';

export default function AddressPage() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-6 sm:p-10">

        <TitleMenu title="Dirección" subtitle="Dirección de entrega" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8">

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Nombres</label>
            <input 
              type="text" 
              className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Apellidos</label>
            <input 
              type="text" 
              className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Dirección</label>
            <input 
              type="text" 
              className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Dirección 2 (opcional)</label>
            <input 
              type="text" 
              className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Código postal</label>
            <input 
              type="text" 
              className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Ciudad</label>
            <input 
              type="text" 
              className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">País</label>
            <select 
              className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">[ Seleccione ]</option>
              <option value="CRI">Costa Rica</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
            <input 
              type="text" 
              className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col items-end  sm:mt-10 col-span-1 sm:col-span-2  max-md:items-center">
            <Link 
              href='/checkout'
              className="w-full sm:w-1/3 bg-gray-800 text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-600 transition">
              Siguiente
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
