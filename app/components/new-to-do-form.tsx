import { useState } from "react";

type ToDoFormProps = {
  onCreate: (title: string, description: string) => void;
};

export function NewToDoForm({ onCreate }: ToDoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-1 border rounded"
        />
        <label className="text-sm font-semibold" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-1 border rounded"
        />
        <button
          className="bg-blue-500 p-1 rounded text-white font-semibold"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}
