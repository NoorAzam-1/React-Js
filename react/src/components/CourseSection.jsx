import React from "react";
import MentorPanel from "./MentorPanel";

export default function CourseSection({ student }) {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-cyan-600">
            Course Section
          </h2>
          <p className="text-gray-500 mt-2">
            Learn Full Stack Development
          </p>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-xl transition-all">
          Explore
        </button>
      </div>
      

      {/* CourseSection -> MentorPanel */}
      <div className="mt-8">
        <MentorPanel student={student} />
      </div>
    </div>
  );
}