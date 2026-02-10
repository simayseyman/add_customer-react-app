function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md mt-4">

      <div className="space-y-2 text-sm text-slate-700">
        <p><span className="font-semibold">Ad:</span> {todo.ad}</p>
        <hr className="my-2 border-slate-200" />
        <p><span className="font-semibold">Soyad:</span> {todo.soyad}</p>
        <hr className="my-2 border-slate-200" />
        <p><span className="font-semibold">Mail:</span> {todo.mail}</p>
        <hr className="my-2 border-slate-200" />
        <p><span className="font-semibold">Doğum Tarihi:</span> {todo.dg}</p>
        <hr className="my-2 border-slate-200" />
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => onEdit(todo)}
          className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg transition"
        >
          Güncelle
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          className="flex items-center gap-1 bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 rounded-lg transition"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
