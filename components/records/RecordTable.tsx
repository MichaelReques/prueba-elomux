// EJercicio 2
"use client";
import { useState, useEffect } from "react";
import { getRecords } from "@/services/recordService";

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

export default function RecordTable({ onSelect }: { onSelect: (record: Record) => void }) {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filterEstado, setFilterEstado] = useState("");

  useEffect(() => {
    getRecords()
      .then(setRecords)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = records.filter((r) => {
    const matchSearch =
      r.nombre.toLowerCase().includes(search.toLowerCase()) ||
      r.documento.includes(search);
    const matchEstado = filterEstado ? r.estado === filterEstado : true;
    return matchSearch && matchEstado;
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (records.length === 0) return <p>No hay registros</p>;

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Buscar por nombre o documento"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <select
          value={filterEstado}
          onChange={(e) => setFilterEstado(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Todos</option>
          <option value="activo">Activo</option>
          <option value="pendiente">Pendiente</option>
          <option value="inactivo">Inactivo</option>
        </select>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Nombre</th>
            <th className="border p-2 text-left">Documento</th>
            <th className="border p-2 text-left">Correo</th>
            <th className="border p-2 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r) => (
            <tr
              key={r.id}
              onClick={() => onSelect(r)}
              className="cursor-pointer hover:bg-gray-50"
            >
              <td className="border p-2">{r.nombre}</td>
              <td className="border p-2">{r.documento}</td>
              <td className="border p-2">{r.correo}</td>
              <td className="border p-2">{r.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}