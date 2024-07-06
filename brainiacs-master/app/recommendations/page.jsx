// components/VoteForFavorite.js
"use client"
import React, { useState } from "react";
import FavoriteContainer from "../components/form";

const VoteForFavorite = () => {
  const [favorites, setFavorites] = useState([
    {
      teacherName: "Mr. Smith",
      title: "Algebra: Solving Equations",
      videoLink: "https://www.youtube.com/watch?v=abc123",
      votes: 0,
    },
    {
      teacherName: "Ms. Johnson",
      title: "Geometry: Area Calculations",
      videoLink: "https://www.youtube.com/watch?v=def456",
      votes: 0,
    },
    {
      teacherName: "Dr. Brown",
      title: "Calculus: Derivatives",
      videoLink: "https://www.youtube.com/watch?v=ghi789",
      votes: 0,
    },
    {
      teacherName: "Prof. Davis",
      title: "Statistics: Probability",
      videoLink: "https://www.youtube.com/watch?v=jkl012",
      votes: 0,
    },
  ]);

  const handleUpvote = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index].votes += 1;
    setFavorites(updatedFavorites);
  };

  return (
    <div className="bg-gray-200 border border-gray-300 rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Vote for Favorite:</h2>
      {favorites.map((favorite, index) => (
        <FavoriteContainer
          key={index}
          teacherName={favorite.teacherName}
          title={favorite.title}
          videoLink={favorite.videoLink}
          votes={favorite.votes}
          onUpvote={() => handleUpvote(index)}
        />
      ))}
    </div>
  );
};

export default VoteForFavorite;
