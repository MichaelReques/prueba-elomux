// Ejercicio 5 y 6

import records from "@/mocks/records.json";

// Ejercicio 5
export async function getRecords() {
    // Simula delay de red
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simula un error aleatorio para probar el estado del error
    if (Math.random() < 0.1) {
        throw new Error("Error al cargar los registros");
    }

    return records;
}

// Ejercicio 6
export async function createRecord(data: {
    nombre: string;
    documento: string;
    correo: string;
    telefono: string;
    estado: string;
    observaciones: string;
}) {
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Validar duplicado por correo
    const duplicateEmail = records.find((r) => r.correo === data.correo);
    if (duplicateEmail) {
        throw new Error("Ya existe un registro con ese correo");
    }

    // Validar duplicado por documento
    const duplicateDoc = records.find((r) => r.documento === data.documento);
    if (duplicateDoc) {
        throw new Error("Ya existe un registro con ese documento");
    }

    // Validar nuevo registro
    const newRecord = {
        id: records.length + 1,
        ...data,
        fechaCreacion: new Date().toISOString().split("T")[0],
    };

    return newRecord;
}
