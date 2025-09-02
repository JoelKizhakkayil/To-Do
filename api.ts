import { ITask } from "./types/tasks";
import { getApiUrl, API_CONFIG } from "./config/api";

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(getApiUrl('/tasks'));
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const createTodo = async (text: string): Promise<ITask> => {
  const res = await fetch(getApiUrl('/tasks'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const updateTodo = async (id: string, text: string): Promise<ITask> => {
  const res = await fetch(getApiUrl(`/tasks/${id}`), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(getApiUrl(`/tasks/${id}`), { method: 'DELETE' });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
};
