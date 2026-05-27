import React from "react";
import ProgressTracker from "./ProgressTracker";

export default function MentorPanel({ student }) {
  return (
    <div className="bg-linear-to-r from-purple-500 to-indigo-500 rounded-3xl p-8 text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-4">
        Mentor Panel
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
          <h3 className="font-semibold">Assignments</h3>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
          <h3 className="font-semibold">Projects</h3>
          <p className="text-2xl font-bold mt-2">5</p>
        </div>
      </div>

      {/* MentorPanel -> ProgressTracker */}
      <ProgressTracker student={student} />
    </div>
  );
}