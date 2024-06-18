import TaskItem from "./TaskItem";

const TaskList = ({ data, updateTask, deleteTask }) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
    <h4 className="mb-3">Tasks</h4>
    <ul className="flex flex-col gap-4 overflow-x-auto w-full">
      {data.map((task, index) => (
        <TaskItem item={task} updateTask={updateTask} deleteTask={deleteTask} key={index} />
      ))}
    </ul>
    </div>
  );
};

export default TaskList;
