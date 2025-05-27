"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { cn } from "@/app/lib/utils/cn"
import { getMainMenu } from "@/app/lib/actions"
import { getSvgIcon } from "@/app/lib/utils/icon"

import { useEffect } from "react"

type submenuItem = {
  nombreSubMenu: string
  hrefSubMenu?: string
  iconSubMenu?: string
  estadoSubMenu: String
}

type MenuItem = {
  idMenu: string
  nombreMenu: string
  hrefMenu?: string
  iconMenu?: string
  estadoMenu: String
  submenu?: submenuItem[]
}

export default function Sidebar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    productos: false,
  })

  useEffect(() => {
    getAllMenu()
  }, [])

  const getAllMenu = async () => {
    try {
      const data = await getMainMenu();
      setMenuItems(data);
    } catch (error) {
      console.error("Error obteniendo el menú:", error);
    }
  };

  const pathname = usePathname()

  const closeAllMenus = () => {
    setOpenMenus({})
  }

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => {
      // Si el submenú ya está abierto, lo cerramos
      if (prev[title]) {
        return { ...prev, [title]: false }
      } else {
        // Si el submenú está cerrado, lo abrimos
        return { ...prev, [title]: true }
      }
    })

    // Aseguramos que el sidebar esté abierto
    if (!isSidebarOpen) {
      setIsSidebarOpen(true)
    }
  }


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    closeAllMenus()
  }

  const renderMenuItem = (item: MenuItem, index: number) => {
    const isActive = item.hrefMenu === pathname
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const isSubmenuOpen = openMenus[item.nombreMenu]

    // Detectamos si hay algún hijo activo
    const hasActiveChild = item.submenu?.some((sub) => sub.hrefSubMenu === pathname)

    // Permite que el ítem padre se resalte si tiene hijos activos o es el ítem actual
    // const highlightParent = (hasSubmenu && (hasActiveChild || isActive))
    // Determina si el ítem padre se debe resaltar
    const highlightParent = (hasSubmenu && hasActiveChild && isSidebarOpen) || (isActive && !hasSubmenu)

    return (
      <div key={index} className="mb-1">
        {/* ITEM SIN SUBMENÚ */}
        {item.hrefMenu && !hasSubmenu ? (
          <Link
            href={item.hrefMenu}
            onClick={closeAllMenus}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              highlightParent
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            )}
          >
            <div
              className="shrink-0"
              dangerouslySetInnerHTML={{ __html: getSvgIcon(item.iconMenu || "default") }}
            />
            <span
              className={cn(
                "ml-2 transition-opacity",
                !isSidebarOpen && "opacity-0 hidden md:block md:opacity-0"
              )}
            >
              {item.nombreMenu}
            </span>
          </Link>
        ) : (
          <>
            {/* ITEM CON SUBMENÚ */}
            <button
              onClick={() => toggleMenu(item.nombreMenu)}  // Cambiar el estado del menú padre
              className={cn(
                "flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors",
                highlightParent
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className="shrink-0"
                  dangerouslySetInnerHTML={{ __html: getSvgIcon(item.iconMenu || "default") }}
                />
                <span
                  className={cn(
                    "ml-2 transition-opacity",
                    !isSidebarOpen && "opacity-0 hidden md:block md:opacity-0"
                  )}
                >
                  {item.nombreMenu}
                </span>
              </div>
              {hasSubmenu && (
                <div
                  className={cn(
                    "transition-opacity",
                    !isSidebarOpen && "opacity-0 hidden md:block md:opacity-0"
                  )}
                >
                  {isSubmenuOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </div>
              )}
            </button>

            {/* SUBMENÚ SOLO SI ESTÁ ABIERTO */}
            {hasSubmenu && isSubmenuOpen && (
              <div
                className={cn(
                  "ml-4 pl-2 border-l border-gray-200 mt-1",
                  !isSidebarOpen && "hidden md:block"
                )}
              >
                {item.submenu?.map((subItem, subIndex) => {
                  const isSubActive = subItem.hrefSubMenu === pathname
                  return (
                    <Link
                      key={subIndex}
                      href={subItem.hrefSubMenu || "#"}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isSubActive
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      )}
                    >
                      <div
                        className="shrink-0"
                        dangerouslySetInnerHTML={{ __html: getSvgIcon(subItem.iconSubMenu || "default") }}
                      />
                      <span
                        className={cn(
                          "ml-2 transition-opacity",
                          !isSidebarOpen && "opacity-0 hidden md:block md:opacity-0"
                        )}
                      >
                        {subItem.nombreSubMenu}
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <>
      <div
        className={cn("fixed inset-0 z-40 bg-black/50 md:hidden", isSidebarOpen ? "block" : "hidden")}
        onClick={toggleSidebar}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 transition-all duration-500 ease-in-out",
          isSidebarOpen ? "w-64" : "w-16",
          "md:relative md:z-0",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <h2
            className={cn(
              "text-lg font-semibold transition-all duration-300 overflow-hidden whitespace-nowrap",
              isSidebarOpen ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
            )}
          >
            Admin Panel
          </h2>

          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-transform duration-300"
          >
            <span
              className={cn(
                "block transition-transform duration-1000",
                isSidebarOpen ? "rotate-90" : "rotate-0"
              )}
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-2">{menuItems.map(renderMenuItem)}</nav>
      </aside>
    </>
  )
}
