"use client";
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fecth meals data. Please try again!</p>
    </main>
  );
}
