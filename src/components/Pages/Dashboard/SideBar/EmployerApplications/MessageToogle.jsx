import React, { useState } from "react";

const MessageWithToggle = ({ message }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = message && message.length > 100;
  const displayMessage = isLong && !expanded ? message.slice(0, 100) + "..." : message;

  return (
    <div className="text-sm text-gray-700">
      <span className="font-medium text-green-600">Message:</span>{" "}
      {displayMessage || "No message provided"}

      {isLong && (
        <button onClick={() => setExpanded(!expanded)} className="ml-2 text-green-600 underline hover:text-green-800 transition text-xs cursor-pointer">{expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default MessageWithToggle;
