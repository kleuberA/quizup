"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import useSupabase from "@/hooks/use-supabase";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function User() {

    const supabase = useSupabase();
    const [nameUser, setNameUser] = useState<string>("");
    const router = useRouter();

    async function getUser() {
        const { data } = await supabase.auth.getSession();
        setNameUser(data.session?.user.user_metadata.name.split(' ')[0].charAt(0).toUpperCase()
            + data.session?.user.user_metadata.lastName.split(' ')[0].charAt(0).toUpperCase()
        );
    }

    getUser();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/auth/signin')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" className="hover:bg-background border hover:border-primary hover:text-primary transition-all duration-300">
                    {nameUser}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-primary">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                        <span className="flex flex-row gap-2 items-center"> <GearIcon /> Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex flex-row gap-2 items-center" onClick={handleLogout}> <ExitIcon width={16} height={16} /> Logout</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}