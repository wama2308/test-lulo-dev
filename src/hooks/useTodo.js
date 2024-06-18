import { useMemo, useState } from "react";

export const useTodo = () => {
  const FORM_INITIAL = {
    title: "",
    description: "",
    dueDate: "",
    otherFilters: ""
  }
  const [form, setForm] = useState(FORM_INITIAL);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    if (!value) {
      setFilteredTasks(tasks);
    }
    if (name === "otherFilters") {
      filterTasks(updatedForm);
    }

  };

  const filterTasks = (form) => {
    const { otherFilters } = form;
    const filtered = tasks.filter(task =>
      task.title.toLowerCase().includes(otherFilters.toLowerCase()) ||
      task.description.toLowerCase().includes(otherFilters.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  const addTask = () => {
    const newTask = { id: tasks.length ? tasks.length + 1 : 1, ...form, status: "Active" };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setForm(FORM_INITIAL);
    setFilteredTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const updateTask = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: "Completed",
        };
      }
      return item;
    });
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const filterAllTasks = () => {
    setFilteredTasks(tasks);
  };

  const filterTasksByStatus = (status) => {
    const filtered = tasks.filter(task => task.status === status);
    setFilteredTasks(filtered);
  };

  const filterOverdueTasks = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const filtered = tasks.filter(task => new Date(task.dueDate) < new Date(currentDate));
    setFilteredTasks(filtered);
  };

  const enableAction = useMemo(() => {
    if (form.title && form.description && form.dueDate) {
      return true
    }
    return false
  }, [form])

  return {
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
  }
}