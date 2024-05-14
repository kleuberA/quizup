"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { z } from "zod";
import toast from "react-hot-toast";
import useSupabase from "@/hooks/use-supabase";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Loader from "@/components/Loader";

const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})

export default function SignInComponent() {

    const [loading, setLoading] = useState(false);

    const supabase = useSupabase();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        })

        setLoading(false);

        if (error) {
            toast.error(error.message + "!",
                {
                    style: {
                        borderRadius: '3px',
                        background: '#333',
                        color: '#fff',
                    },
                });
        } else {
            toast.success("Login successfully!",
                {
                    style: {
                        borderRadius: '3px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            router.push('/quiz');
        }
        form.reset();
    }

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="m@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex flex-row justify-between">
                                                <FormLabel>Password</FormLabel>
                                                <Link href="/auth/fortgotpassword" className="text-xs text-primary underline" >Forgot Password?</Link>
                                            </div>
                                            <FormControl>
                                                <Input type="password" placeholder="********" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button
                                disabled={loading}
                                type="submit"
                                className="w-full hover:bg-transparent hover:text-primary border border-transparent hover:border-primary transition-all duration-300">
                                {loading ? (<Loader />) : "Login"}
                            </Button>
                        </div>
                    </form>
                </Form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/signup" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}