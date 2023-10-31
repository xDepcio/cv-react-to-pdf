import { ProximaSoft } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CvPage() {
    return (
        <div className="bg-slate-950 h-screen w-screen">
            <div className="w-[60%] m-auto">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image alt="profile-img" src="/hero-img.png" width={1300} height={980} />
                    </div>
                    <div>
                        <p className="text-slate-50 text-lg">Hi! I'm</p>
                        <h1 className={cn(ProximaSoft.className, "text-sky-500 text-7xl whitespace-nowrap font-bold")}>Aleksander Drwal</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
