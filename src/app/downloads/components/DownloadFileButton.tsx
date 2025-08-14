// components/DownloadFileButton.tsx
"use client";

import React from "react";

interface DownloadFileButtonProps {
  filePath: string; // Example: "/myfile.pdf"
  fileName?: string; // Optional custom filename
}

export default function DownloadFileButton({
  filePath,
  fileName,
}: DownloadFileButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName || filePath.split("/").pop() || "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Download File
    </button>
  );
}
