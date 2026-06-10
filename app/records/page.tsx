"use client";
import { useState } from "react";
import RecordTable from "@/components/records/RecordTable";
import RecordDetail from "@/components/records/RecordDetails";
import RecordForm from "@/components/records/RecordForm";

interface Record {
  id: number;
  nombre: string;
  documento: string;
  correo: string;
  telefono: string;
  estado: string;
  fechaCreacion: string;
  observaciones: string;
}

export default function RecordsPage() {
  const [selected, setSelected] = useState<Record | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Registros</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? "Ver Tabla" : "Nuevo Registro"}
        </button>
      </div>

      {showForm ? (
        <RecordForm />
      ) : (
        <RecordTable onSelect={setSelected} />
      )}

      {selected && (
        <RecordDetail record={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}