import { Heart } from "lucide-react"

export default function Footer() {
    return (

        <footer className="bg-white py-2 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="mt-2 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Admin Panel. Todos los derechos reservados. </p>
                    <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-500">
                        Diseñado con <Heart className="h-4 w-4 mx-1 text-red-500" /> por Rahamsis CG.
                    </div>
                </div>

            </div>
        </footer >
    );
}