import { useState } from "react";
import TodoItem from "../components/TodoItem";
import Todo from "../interfaces/Todo";
import { UserPlusIcon } from "@heroicons/react/24/outline";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [mail, setMail] = useState("");
  const [dg, setDg] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (!ad || !soyad || !mail || !dg) return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? new Todo(editId, ad, soyad, mail, dg) : todo,
        ),
      );
      setEditId(null);
    } else {
      const newTodo = new Todo(Date.now(), ad, soyad, mail, dg);
      setTodos([...todos, newTodo]);
    }

    setAd("");
    setSoyad("");
    setMail("");
    setDg("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    if (id === editId) {
      setAd("");
      setSoyad("");
      setMail("");
      setDg("");
      setEditId(null);
    }
  };

  const editTodo = (todo) => {
    setAd(todo.ad);
    setSoyad(todo.soyad);
    setMail(todo.mail);
    setDg(todo.dg);
    setEditId(todo.id);
  };

  return (
    <div
      className="min-h-screen pt-5 pb-20
      bg-[radial-gradient(ellipse_at_top,_#e0f2fe_0%,_#64748b_60%,_#334155_100%)]"
    >
      <h1 className="text-2xl font-bold text-center mt-4 text-cyan-950">
        Müşteri Kayıt
      </h1>

      <div className="max-w-xl mx-auto mt-6 p-6 bg-white rounded-2xl shadow-lg bg-[#FEFEFE]">
        <div className="mb-4 flex items-center gap-2 justify-center">
          <UserPlusIcon className="h-6 w-6 text-sky-950" />
          <h2 className="font-semibold text-lg text-cyan-950">
            Yeni Müşteri Ekle
          </h2>
        </div>

        <div className="flex-1 h-px bg-slate-300 mb-4"></div>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={ad}
            onChange={(e) =>
              setAd(
                e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1),
              )
            }
            className="border p-2 bg-[#F4F6FA]"
            placeholder="Ad giriniz"
          />

          <input
            type="text"
            value={soyad}
            onChange={(e) =>
              setSoyad(
                e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1),
              )
            }
            className="border p-2 bg-[#F4F6FA]"
            placeholder="Soyad giriniz"
          />

          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="border p-2 bg-[#F4F6FA]"
            placeholder="Mail giriniz"
          />

          <input
            type="date"
            value={dg}
            onChange={(e) => setDg(e.target.value)}
            className="border p-2 bg-[#F4F6FA]"
            placeholder="Doğum tarihi giriniz"
          />

          <button
            onClick={addTodo}
            className="bg-cyan-800 text-white px-4 h-10 rounded"
          >
            {editId ? "Güncelle" : "Ekle"}
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <div className="max-w-md mx-auto mb-6 flex items-center">
          <div className="flex-1 h-px bg-slate-300"></div>
          <h2 className="text-xl font-semibold whitespace-nowrap px-2 text-cyan-950">
            Müşteri Listesi
          </h2>
          <div className="flex-1 h-px bg-slate-300"></div>
        </div>

        <div className="flex flex-col max-w-xl mx-auto">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
