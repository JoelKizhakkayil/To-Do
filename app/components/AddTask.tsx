'use client';

import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { createTodo } from '@/api';

interface AddTaskProps {
  onTaskAdded: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onTaskAdded }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    try {
      await createTodo(taskText.trim());
      setTaskText('');
      onTaskAdded();
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        type="submit"
        className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600"
        disabled={!taskText.trim()}
      >
        Add Task <AiOutlinePlus size={15} className='ml-1' />
      </button>
    </form>
  );
};

export default AddTask;
