import MenuHome from "@/components/home/menu/MenuHome";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <MenuHome />
      <div className="bg-background w-full">
        <div className="w-[80dvw] min-h-[calc(100dvh_-_4rem)] h-full mx-auto flex flex-col justify-center items-center">
          <h1 className="text-lg lg:text-4xl font-bold text-accent-foreground">Welcome to QuizUP</h1>
          <p className="text-sm lg:text-xl tracking-wider font-mono text-muted-foreground">Test your knowledge, always have fun!</p>
          <p className="text-sm lg:text-lg text-muted-foreground">The best quiz platform for you.</p>
        </div>
      </div>
    </div>
  );
}
