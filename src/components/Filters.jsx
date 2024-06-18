import Separator from "./Separator";

const Filters = ({
  filterAllTasks,
  filterTasksByStatus,
  filterOverdueTasks,
}) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <h4>Filters</h4>
      <div className="flex flex-col sm:flex-row gap-2 mb-5 w-full">
        <button onClick={() => filterAllTasks()}>All</button>
        <button onClick={() => filterTasksByStatus("Active")}>Active</button>
        <button onClick={() => filterTasksByStatus("Completed")}>Completed</button>
        <button onClick={() => filterOverdueTasks()}>Due date</button>
      </div>
      <Separator />
    </div>
  );
};

export default Filters;
