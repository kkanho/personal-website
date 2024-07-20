import { Card, CardTitle, CardDescription, CardContent } from "./card"
import { Skeleton } from "./skeleton"


const CardSkeleton = () => {
    return (
        <>
            <Card className="animate-pulse w-full shadow-md rounded-xl flex flex-col transition-all hover:scale-110 hover:rotate-1 space-y-4 container pt-6 h-60">
                <CardTitle>
                    <Skeleton className="w-[180px] h-[20px] rounded-full"/>
                </CardTitle>
                <CardDescription>
                    <Skeleton className="w-[250px] h-[20px] rounded-full"/>
                </CardDescription>
                <CardDescription className="flex flex-wrap gap-2">
                    <Skeleton className="w-[120px] h-[20px] rounded-full"/>
                    <Skeleton className="w-[140px] h-[20px] rounded-full"/>
                    <Skeleton className="w-[45px] h-[20px] rounded-full"/>
                    <Skeleton className="w-[150px] h-[20px] rounded-full"/>
                    <Skeleton className="w-[60px] h-[20px] rounded-full"/>
                </CardDescription>
                <CardContent className="w-full flex m-auto flex-grow justify-end items-end gap-3">
                    <Skeleton className="w-[90px] h-[20px] rounded-full"/>
                    <Skeleton className="w-[140px] h-[20px] rounded-full"/>
                </CardContent>
            </Card>
        </>
    )
}

export default CardSkeleton