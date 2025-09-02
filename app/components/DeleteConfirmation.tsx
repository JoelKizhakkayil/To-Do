'use client';

import React from 'react';

interface DeleteConfirmationProps {
  isOpen: boolean;
  taskText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  taskText,
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-lg font-semibold mb-4">Delete Task</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete {taskText}?
        </p>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation; 