export default function ResultsPage() {
  return (
    <main>
      <h1>Results</h1>
      <p>Here are your results:</p>
      <ul>
        <li>Geist Sans: 10</li>
        <li
          style={{
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Geist Mono: 20
        </li>
      </ul>
    </main>
  );
}