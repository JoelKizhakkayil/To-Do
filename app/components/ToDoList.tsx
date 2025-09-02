'use client';

import { ITask } from '@/types/tasks';
import React from 'react';
import Task from './Task';

interface ToDoListProps {
  tasks?: ITask[];
  onTaskDeleted: () => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks = [], onTaskDeleted }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Task</th>
            <th>Created</th>
            <th>Updated</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody suppressHydrationWarning>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onTaskDeleted={onTaskDeleted} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
