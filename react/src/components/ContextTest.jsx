"use client";

import { useContext } from "react";
import { UserContext } from "@/hooks/UserContext";

export default function ContextTest() {
  const name = useContext(UserContext);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">
        Welcome {name}
      </h1>
    </div>
  );
}