import Separator from "./Separator";

const TodoForm = ({ handleInput, addTask, form, enableAction }) => {
  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        value={form.title}
        name="title"
        placeholder="Title"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="text"
        className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        value={form.description}
        name="description"
        placeholder="Description"
        onChange={(e) => handleInput(e)}
      />
      <input
        type="date"
        className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        value={form.dueDate}
        name="dueDate"
        onChange={(e) => handleInput(e)}
      />
      <div className="flex justify-start sm:justify-end">
        <button onClick={() => addTask()} className="w-full sm:w-fit" disabled={!enableAction}>
          Add Task
        </button>
      </div>
      <Separator />
    </div>
  );
};

export default TodoForm;
