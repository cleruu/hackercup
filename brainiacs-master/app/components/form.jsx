// components/FavoriteContainer.js
import React from "react";
// AKA FORM
const FavoriteContainer = ({
  teacherName,
  title,
  videoLink,
  votes,
  onUpvote,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">
        {teacherName}: {title}
      </h3>
      <div className="flex justify-between items-center">
        <a
          href={videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2"
        >
          Watch Demo
        </a>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
          onClick={onUpvote}
        >
          Upvote {votes}
        </button>
      </div>
    </div>
  );
};

export default FavoriteContainer;
