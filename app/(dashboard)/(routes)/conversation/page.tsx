"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { formSchema } from "./constants";

type formTypes = z.infer<typeof formSchema>;

const Conversation = () => {
    const form = useForm<formTypes>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    const onSubmit = (data: formTypes) => {
        console.log(data);
    };

    const isLoading = form.formState.isLoading;

    return (
        <div>
            <Heading
                title='Conversation'
                description='Most advanced conversation model'
                icon={MessageSquare}
                iconColor='text-violet-500'
                bgColor='bg-violet-500/10'
            />
            <div className='px-3'>
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='grid grid-cols-12 border rounded-md items-center px-3 py-2 gap-x-4 gap-y-2 focus-within:shadow-sm'
                        >
                            <FormField
                                name='prompt'
                                render={({ field }) => (
                                    <FormItem className='col-span-12 lg:col-span-10'>
                                        <FormControl className='p-0 m-0'>
                                            <Input
                                                className=' border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                                                placeholder='What is the radius of earth?'
                                                disabled={isLoading}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                className='col-span-12 lg:col-span-2 w-full'
                                disabled={isLoading}
                            >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className='mt-4 space-y-4'>Responses here...</div>
            </div>
        </div>
    );
};
export default Conversation;
