//Ejercicio1
"use client";

import { useState } from "react";
import { createRecord } from "@/services/recordService"; 

interface FormData {
    nombre: string;
    documento: string;
    correo: string;
    telefono: string;
    estado: string;
    observaciones: string;
}

interface FormErrors {
    nombre?: string;
    documento?: string;
    correo?: string;
    telefono?: string;
    estado?: string;
}

export default function RecordForm() {
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        documento: "",
        correo: "",
        telefono: "",
        estado: "pendiente",
        observaciones: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [generalError, setGeneralError] = useState("");
    const [success, setSuccess] = useState("");

    function validate() {
        const newErrors: FormErrors = {};
        
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es requerido";
        }
        if (!formData.documento.trim()) {
            newErrors.documento = "El documento es requerido";
        }
        if (!formData.correo.trim()) {
            newErrors.correo = "El correo es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
            newErrors.correo = "El correo no es válido";
        }
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es requerido";
        }
        

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    
        if (!validate()) {
            return;
        }

        setLoading(true);
        setGeneralError("");

        try {
            await createRecord(formData);
            setSuccess("Registro creado exitosamente");
            setFormData({
                nombre: "",
                documento: "",
                correo: "",
                telefono: "",
                estado: "pendiente",
                observaciones: "",
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                setGeneralError(error.message);
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Crear Nuevo Registro</h2>

            {generalError && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{generalError}</div>}
            {success && <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">{success}</div>}

            <div className="mb-4">
                <label className="block mb-1 font-medium">Nombre</label>
                <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className={`w-full px-3 py-2 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Documento</label>
                <input
                    type="text"
                    value={formData.documento}
                    onChange={(e) => setFormData({ ...formData, documento: e.target.value })}
                    className={`w-full px-3 py-2 border ${errors.documento ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.documento && <p className="text-red-500 text-sm mt-1">{errors.documento}</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Correo</label>
                <input
                    type="email"
                    value={formData.correo}
                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                    className={`w-full px-3 py-2 border ${errors.correo ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Teléfono</label>
                <input
                    type="text"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className={`w-full px-3 py-2 border ${errors.telefono ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Estado</label>
                <select
                    value={formData.estado}
                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                    className={`w-full px-3 py-2 border ${errors.estado ? 'border-red-500' : 'border-gray-300'} rounded`}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
                {errors.estado && <p className="text-red-500 text-sm mt-1">{errors.estado}</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Observaciones</label>
                
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
                {loading ? "Creando..." : "Crear Registro"}
            </button>
        </form>
    )
}