'use client';

import { getAllTodos } from "@/api";
import { ITask } from "@/types/tasks";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getAllTodos();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <h1 className="text-2xl font-bold text-center mb-6">A Simple To-Do App</h1>
      <AddTask onTaskAdded={fetchTasks} />
      <div className="mt-6">
        <ToDoList tasks={tasks} onTaskDeleted={fetchTasks} />
      </div>
    </main>
  );
}