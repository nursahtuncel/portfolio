"use client";
import { useEffect, useState } from "react";

export default function CommitCount() {
  const [commits, setCommits] = useState(null);

  useEffect(() => {
    fetch("/api/commits")
      .then((res) => res.json())
      .then((data) => setCommits(data.totalCommits))
      .catch((err) => console.error(err));
  }, []);

  if (commits === null) return <p>Loading commits...</p>;

  return (
    <div className="text-center">
      <h3 className="text-lg font-medium">Total commits</h3>
      <p className="text-2xl font-bold">{commits}</p>
    </div>
  );
}
