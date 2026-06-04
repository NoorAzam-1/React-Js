import React from "react";
import CourseSection from "@/components/CourseSection";

export default function page() {
  const student = {
    name: "Noor Azam",
    course: "MERN Stack",
    batch: "2026",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-100 via-blue-100 to-purple-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Props Drilling in React
      </h1>

      {/* App -> CourseSection */}
      <CourseSection student={student} />
    </div>
  );
}

