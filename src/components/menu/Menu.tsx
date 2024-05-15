import { ToggleTheme } from "../toggle-theme";
import User from "../user/User";
import Link from "next/link";

export default function Menu() {
    return (
        <nav className="w-full h-16 border-b border-border">
            <div className="w-[80dvw] h-full flex justify-between mx-auto items-center">
                <div>
                    <Link href="" className="text-2xl font-bold font-mono group flex gap-3 items-center">
                        Quiz
                        <span className="bg-primary p-2 rounded-sm text-accent group-hover:bg-secondary group-hover:text-accent-foreground transition-all duration-300">UP</span>
                    </Link>
                </div>
                <div className="flex flex-row gap-2">
                    <ToggleTheme />
                    <User />
                </div>
            </div>
        </nav>
    )
}