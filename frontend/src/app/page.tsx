import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Next.js Frontend</h1>
      <p>Message from backend: {message}</p>
    </main>
  );
}
