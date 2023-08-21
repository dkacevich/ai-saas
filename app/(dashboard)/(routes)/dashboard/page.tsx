"use client";

import { cn } from "@/lib/utils";
import {
    ArrowRight,
    Code,
    ImageIcon,
    MessageSquare,
    Music,
    VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation",
    },

    {
        href: "/video",
        label: "Video Generation",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        icon: VideoIcon,
    },
    {
        href: "/image",
        label: "Image Generation",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        icon: ImageIcon,
    },
    {
        href: "/music",
        label: "Music Generation",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        icon: Music,
    },
    {
        href: "/code",
        label: "Code Generation",
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        icon: Code,
    },
];

const DashboardPage = () => {
    const router = useRouter();

    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>
                Explore the power of AI
            </h2>
            <p className='text-center mt-4 text-muted-foreground font-light text-sm md:text-lg'>
                Chat with the smartest AI ever - Experience it
            </p>
            <div className='flex flex-col gap-3 mt-8 px-4'>
                {tools.map((tool) => {
                    return (
                        <Card
                            onClick={() => router.push(tool.href)}
                            key={tool.href}
                            className='flex items-center py-3 px-4 cursor-pointer'
                        >
                            <div
                                className={cn(
                                    "flex items-center justify-center  mr-3 p-2 rounded",
                                    tool.bgColor,
                                )}
                            >
                                <tool.icon
                                    className={cn("text-lg", tool.color)}
                                />
                            </div>
                            <div className='font-bold flex-auto'>
                                {tool.label}
                            </div>
                            <ArrowRight />
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
export default DashboardPage;
