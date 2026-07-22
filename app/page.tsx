export default function HomePage() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-6">
      <span className="bg-primary/20 mb-4 rounded-full px-4 py-2 text-sm">
        🌿 ByArsh Design System
      </span>

      <h1 className="mb-4 text-6xl font-bold">ByArsh</h1>

      <p className="text-muted-foreground max-w-xl text-center text-lg">
        A calm and genuine corner of the internet where learning, creativity,
        and everyday life come together.
      </p>

      <button className="bg-primary text-primary-foreground mt-10 rounded-full px-8 py-3 transition hover:opacity-90">
        Let's Build →
      </button>
    </main>
  );
}
