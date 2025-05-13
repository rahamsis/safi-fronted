import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">
          Bienvenido al panel de administración. Utiliza el menú lateral para navegar entre las diferentes secciones.
        </p>
      </div>
    </div>
  )
}
