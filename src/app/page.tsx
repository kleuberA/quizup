import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <nav className="w-full h-16 border-b border-border">
        <div className="w-[80dvw] h-full flex justify-between mx-auto items-center">
          <div>
            <Link href="" className="text-2xl font-bold font-mono group flex gap-3 items-center">
              Quiz
              <span className="bg-primary p-2 rounded-sm text-accent group-hover:bg-secondary group-hover:text-accent-foreground transition-all duration-300">UP</span>
            </Link>
          </div>
          <div className="flex flex-row gap-5">
            <Link href="/auth/signin" className="text-base font-medium font-mono group flex gap-3 items-center text-accent bg-primary p-2 rounded-sm border hover:bg-transparent hover:text-accent-foreground transition-all duration-300 hover:border-primary">
              Sign In
            </Link>
            <Link href="/auth/signup" className="text-base font-medium font-mono group flex gap-3 items-center p-2 rounded-sm border border-primary hover:bg-primary hover:text-accent transition-all duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
