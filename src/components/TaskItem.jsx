const TaskItem = ({ item, updateTask, deleteTask }) => {
  return (
    <li className="flex items-center justify-between gap-5 flex-row">
      <div
        className={`flex gap-5 ${
          item.status === "Completed" ? "line-through" : ""
        }`}
      >
        <h3 className="">{item.title}</h3>
        <p className="">{item.description}</p>
        <p className="">{item.dueDate}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => updateTask(item.id)}>{item.status}</button>
        <button onClick={() => deleteTask(item.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
