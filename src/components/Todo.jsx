import { useTodo } from "../hooks/useTodo";
import Filters from "./Filters";
import TodoForm from "./TodoForm";
import TaskList from "./TaskList";
import OtherFilters from "./OtherFilters";

const Todo = () => {
  const {
    form,
    tasks,
    filteredTasks,
    enableAction,
    handleInput,
    addTask,
    updateTask,
    deleteTask,
    filterAllTasks,
    filterTasksByStatus,
    filterOverdueTasks,
  } = useTodo();

  return (
    <div className="flex flex-col w-full sm:max-w-[800px]">
      <TodoForm
        handleInput={handleInput}
        addTask={addTask}
        form={form}
        enableAction={enableAction}
      />
      {tasks.length ? (
        <>
          <Filters
            filterAllTasks={filterAllTasks}
            filterTasksByStatus={filterTasksByStatus}
            filterOverdueTasks={filterOverdueTasks}
          />
          <OtherFilters
            handleInput={handleInput}
            otherFilters={form.otherFilters}
          />
        </>
      ) : null}

      {filteredTasks.length ? (
        <TaskList
          data={filteredTasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ) : (
        <p>There are no tasks</p>
      )}
    </div>
  );
};

export default Todo;
