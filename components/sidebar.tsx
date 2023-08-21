"use client";

import { cn } from "@/lib/utils";
import {
    Code,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    Music,
    Settings,
    VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

const routes = [
    {
        href: "/dashboard",
        label: "Dashboard",
        color: "text-sky-500",
        icon: LayoutDashboard,
    },
    {
        href: "/conversation",
        label: "Conversation",
        color: "text-violet-500",
        icon: MessageSquare,
    },
    {
        href: "/video",
        label: "Video Generation",
        color: "text-orange-500",
        icon: VideoIcon,
    },
    {
        href: "/image",
        label: "Image Generation",
        color: "text-pink-500",
        icon: ImageIcon,
    },
    {
        href: "/music",
        label: "Music Generation",
        color: "text-emerald-500",
        icon: Music,
    },
    {
        href: "/code",
        label: "Code Generation",
        color: "text-green-700",
        icon: Code,
    },
    {
        href: "/settings",
        label: "Settings",
        icon: Settings,
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className='flex flex-col h-full text-white bg-[#111827] gap-4 py-4'>
            <div className='px-3 py-2'>
                <Link
                    href='/dashboard'
                    className='flex items-center pl-3 mb-14'
                >
                    <h2 className={montserrat.className}>Logo Genius</h2>
                </Link>

                <div className='flex flex-col gap-2'>
                    {routes.map((route) => {
                        return (
                            <Link
                                href={route.href}
                                key={route.href}
                                className={cn(
                                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer  rounded-lg transition ",
                                    pathname === route.href
                                        ? "bg-gray-200"
                                        : "hover:text-white hover:bg-white/10",
                                )}
                            >
                                <div className='flex items-center'>
                                    <route.icon
                                        className={cn(
                                            "h-5 w-5 mr-3",
                                            route.color,
                                        )}
                                    />
                                    {route.label}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
