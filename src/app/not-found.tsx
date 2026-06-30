import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="w-full max-w-3xl rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
        {/* Editor Header */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm text-muted-foreground">
            error.tsx
          </span>
        </div>

        {/* Code */}
        <div className="p-8 font-mono text-sm md:text-base">
          <p className="text-red-500">
            <span className="text-muted-foreground">1</span> throw new Error(
            "404");
          </p>

          <p className="mt-4">
            <span className="text-muted-foreground">2</span>{" "}
            <span className="text-blue-500">const</span>{" "}
            <span className="text-green-500">message</span> ={" "}
            <span className="text-yellow-500">
              "Oops! Page not found."
            </span>
            ;
          </p>

          <p className="mt-4">
            <span className="text-muted-foreground">3</span>{" "}
            <span className="text-blue-500">return</span>{" "}
            <span className="text-purple-500">&lt;HomePage /&gt;</span>;
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex rounded-lg border border-border px-5 py-2 transition hover:bg-accent"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}