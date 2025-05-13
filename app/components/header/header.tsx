"use client"

import { UserCircle, Bell, Settings } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu"

export default function Header() {
    return (
        <header className="h-16 border-b border-gray-200 bg-white flex items-center px-4 md:px-6">
            <div className="flex items-center ml-auto gap-2">
                <button className="text-gray-500 hover:text-gray-900">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notificaciones</span>
                </button>

                <button className="text-gray-500 hover:text-gray-900">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Configuración</span>
                </button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="text-gray-500 hover:text-gray-900">
                            <UserCircle className="h-6 w-6" />
                            <span className="sr-only">Perfil de usuario</span>
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg rounded-md py-3 mt-3">
                        <DropdownMenuLabel className="px-6 pb-1 font-bold text-base text-gray-900 hover:no-underline cursor-pointer">
                            Mi cuenta
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="border-t border-gray-200" />
                        <DropdownMenuItem className="px-6 py-1 text-gray-800 hover:no-underline hover:bg-gray-200 focus:outline-none focus-visible:ring-0 focus-visible:border-transparent cursor-pointer">
                            Perfil
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-6 py-1 text-gray-800 hover:no-underline hover:bg-gray-200 focus:outline-none focus-visible:ring-0 focus-visible:border-transparent cursor-pointer">
                            Configuración
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="border-t border-gray-200" />
                        <DropdownMenuItem className="px-6 pt-1 text-gray-800 hover:no-underline hover:bg-gray-200 focus:outline-none focus-visible:ring-0 focus-visible:border-transparent cursor-pointer">
                            Cerrar sesión
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
