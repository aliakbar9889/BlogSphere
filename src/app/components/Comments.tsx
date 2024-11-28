'use client';
import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  // Add comment handler
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([newComment, ...comments]); // Add comment at the bottom
      setNewComment('');
    }
  };

  // Delete comment handler
  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-md mt-10">
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="flex-1 border border-gray-300 p-2 rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>

      <ul className="space-y-2">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-gray-200 p-2 rounded shadow-sm flex justify-between items-center text-black"
          >
            <span>{comment}</span>
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
