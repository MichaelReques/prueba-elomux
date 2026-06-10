// Ejercicio 4

import users from '@/mocks/users.json';

export async function login (email: string, password: string) {
    // Simula delay de red
    await new Promise(resolve => setTimeout(resolve, 800));

    // Buscar el usuario por email
    const user = users.find(u => u.email === email);

    // si no existe
    if(!user) {
        throw new Error('Usuario no encontrado');
    }

    // Si la contraseña no coincide
    if(user.password !== password) {
        throw new Error('Contraseña incorrecta');
    }

    // Si todo esta bien
    return {
        token : "fake-token-" + user.id,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        },
    };

}