import { gothic, sans } from "./layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className={sans.className}>
        deploy your Next.js site to a 에이 shareable URL with Vercel.
      </span>
    </main>
  );
}
