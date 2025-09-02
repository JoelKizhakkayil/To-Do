'use client';

import { ITask } from '@/types/tasks';
import React, { useState } from 'react';
import { deleteTodo, updateTodo } from '@/api';
import DeleteConfirmation from './DeleteConfirmation';

interface TaskProps {
  task: ITask;
  onTaskDeleted: () => void;
}

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleString();
  } catch {
    return 'Invalid date';
  }
};

const Task: React.FC<TaskProps> = ({ task, onTaskDeleted }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleDelete = async () => {
    setShowDeleteConfirm(false);
    try {
      await deleteTodo(task.id);
      onTaskDeleted();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(task.text);
  };

  const handleSave = async () => {
    if (!editText.trim()) return;
    
    try {
      await updateTodo(task.id, editText.trim());
      setIsEditing(false);
      onTaskDeleted(); // Refresh the list to show updated data
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(task.text);
  };

  return (
    <>
      <tr>
        <td className="font-medium">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="border p-1 w-full rounded"
              autoFocus
            />
          ) : (
            task.text
          )}
        </td>
        <td className="text-sm text-gray-600">{formatDate(task.created_at)}</td>
        <td className="text-sm text-gray-600">{formatDate(task.updated_at)}</td>
        <td className="text-center space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="btn btn-sm btn-success"
                disabled={!editText.trim()}
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="btn btn-sm btn-ghost"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                className="btn btn-sm btn-info"
              >
                Edit
              </button>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </>
          )}
        </td>
      </tr>
      
      <DeleteConfirmation
        isOpen={showDeleteConfirm}
        taskText={task.text}
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteConfirm(false)}
      />
    </>
  );
};

export default Task;
