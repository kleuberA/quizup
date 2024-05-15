import { usePathname, useRouter } from "next/navigation";
import useSupabase from "./use-supabase";

async function isAuthenticated() {
    const supabase = useSupabase();
    const router = useRouter();
    const path = usePathname();
    console.log(path);

    const { data } = await supabase.auth.getSession();

    if (!data?.session && path === '/quiz') {
        router.push('/');
    }

    if (data.session?.user) {
        router.push('/quiz');
    }
}

export default isAuthenticated;