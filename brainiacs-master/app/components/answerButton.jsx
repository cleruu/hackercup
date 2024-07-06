// components/AmountButton.js
"use client";

import React from "react";
import { useRouter } from "next/router";

export default function AmountButton({ amount, targetPage }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(targetPage);
  };

  return (
    <button onClick={handleClick} className="text-right">
      {amount}
    </button>
  );
}
