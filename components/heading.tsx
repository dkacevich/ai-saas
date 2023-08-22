import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface Props {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

const Heading: FC<Props> = ({
    title,
    description,
    icon: Icon,
    iconColor,
    bgColor,
}) => {
    return (
        <div className='px-4 lg:px-8 flex items-center gap-x-3 mb-8'>
            <div className={cn("p-3 w-fit rounded-md", bgColor)}>
                <Icon className={cn("w-10 h-10", iconColor)} />
            </div>
            <div>
                <div className='text-3xl font-bold'>{title}</div>
                <div className='text-sm text-muted-foreground'>
                    {description}
                </div>
            </div>
        </div>
    );
};
export default Heading;
