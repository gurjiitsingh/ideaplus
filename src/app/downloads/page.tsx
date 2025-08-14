// app/components/Services.tsx
"use client";

import DownloadFileButton from "./components/DownloadFileButton";

export default function downloads() {
  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Downloads</h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-8">
        <strong>Click</strong> to start dowload<br /><br />



         
   
      <DownloadFileButton filePath="/myfile.pdf" fileName="Report.pdf" />
 
      </p>

    
    </section>
  );
}
