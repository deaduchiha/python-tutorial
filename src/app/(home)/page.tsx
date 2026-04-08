import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-4">
      <div className="mx-auto w-full max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium">
          <span>Nikode</span>
          <span className="text-fd-muted-foreground">Python learning</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight">
          Learn Python, step by step.
        </h1>
        <p className="mt-3 text-fd-muted-foreground">
          A calm, practical path from your first program to real projects—explained clearly, with examples you can run.
        </p>

        <Link
          href="/docs"

          className="inline-flex mt-8 items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-fd-muted"
        >
          Start learning in
          /docs
        </Link>

      </div>
    </div>
  )
}
