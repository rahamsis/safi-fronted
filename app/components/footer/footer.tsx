import { Heart } from "lucide-react"

export default function Footer() {
    return (

        <footer className="bg-white py-4 px-4 md:px-6 w-full border-t border-gray-200">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Admin Panel. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                        Diseñado con <Heart className="h-4 w-4 mx-1 text-red-500" /> por Rahamsis CG.
                    </div>
                </div>
            </div>
        </footer>

    );
}