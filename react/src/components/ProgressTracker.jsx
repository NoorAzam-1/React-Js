import React from "react";

export default function ProgressTracker({ student }) {
  return (
    <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        Progress Tracker
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span className="font-semibold">Student Name</span>
          <span>{student.name}</span>
        </div>

        <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span className="font-semibold">Course</span>
          <span>{student.course}</span>
        </div>

        <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
          <span className="font-semibold">Batch</span>
          <span>{student.batch}</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span>Course Completion</span>
          <span>75%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-indigo-500 h-4 rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
}