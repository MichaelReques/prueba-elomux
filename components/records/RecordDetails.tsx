// Ejercicio 3
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

export default function RecordDetail({ record, onClose }: { record: Record; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Detalle del Registro</h2>

        <div className="space-y-2">
          <p><span className="font-medium">Nombre:</span> {record.nombre}</p>
          <p><span className="font-medium">Documento:</span> {record.documento}</p>
          <p><span className="font-medium">Correo:</span> {record.correo}</p>
          <p><span className="font-medium">Teléfono:</span> {record.telefono}</p>
          <p><span className="font-medium">Estado:</span> {record.estado}</p>
          <p><span className="font-medium">Fecha:</span> {record.fechaCreacion}</p>
          <p><span className="font-medium">Observaciones:</span> {record.observaciones}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}