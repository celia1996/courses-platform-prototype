import React, { useState } from "react";
import "./SaveButton.css";

export const SaveButton: React.FC = () => {
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      className="save-course text-body-medium-semibold"
      onClick={() => setSaved((s) => !s)}
      aria-pressed={saved}
    >
      {saved ? (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="img"
          fill="currentColor"
        >
          <path d="M6 4h12v18l-6-4-6 4V4z" />
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="img"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 4h12v18l-6-4-6 4V4z" />
        </svg>
      )}
      <span>Save Course</span>
    </button>
  );
};
