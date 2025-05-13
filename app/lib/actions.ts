'use server';

export async function getMainMenu() {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/backendApi/menu`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': '/'
            },
            next: { revalidate: 0 }
        });

        const data = await response.json();
        return data; // ya tiene estructura { nombreMenu, hrefMenu, submenu: [...] }

    } catch (error) {
        console.error('Error al obtener el menu (getMainMenu):', error);
        throw new Error("Error al obtener el menu (getMainMenu");
    }
}
