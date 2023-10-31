import { ProximaSoft } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BsCodeSlash } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";

export default function CvPage() {
    return (
        <div className="bg-slate-950 h-screen w-screen">
            <div className="w-[60%] m-auto">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image alt="profile-img" src="/hero-img.png" width={1300} height={980} />
                    </div>
                    <div>
                        <p className="text-lg text-muted-foreground font-medium">Hi! I'm</p>
                        <h1 className={cn(ProximaSoft.className, "text-sky-500 text-7xl whitespace-nowrap font-bold")}>Aleksander Drwal</h1>
                        <div className="flex items-center justify-between px-4 mt-10">
                            <div className="text-slate-50 flex items-center justify-center gap-4">
                                <p className="font-semibold">Web developer</p>
                                <BsCodeSlash className="text-2xl" />
                            </div>
                            <div className="text-slate-50 flex items-center justify-center gap-4">
                                <p className="font-semibold">Comp-sci student</p>
                                <FaUniversity className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[40%_60%]">
                    <div className="text-slate-50">
                        <p className="text-amber-500 mb-6 text-sm text-center font-bold">education</p>
                        <div className="border border-slate-900 rounded-lg p-4 flex flex-col gap-10">
                            <div className="grid grid-cols-[20%_80%]">
                                <div className="relative">
                                    <div className="absolute w-4 h-4 rounded-full bg-slate-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute w-1 h-20 rounded-full bg-slate-300 left-1/2 top-full -translate-x-1/2 -translate-y-1/2"></div>
                                </div>
                                <div>
                                    <p className="mb-2">Computer sciencie</p>
                                    <p className="text-sm font-medium text-muted-foreground">Warsaw Univeristy of Technology</p>
                                    <p className="text-xs text-muted-foreground font-medium">2022 - now</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[20%_80%]">
                                <div className="relative">
                                    <div className="absolute w-4 h-4 rounded-full bg-slate-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    {/* <div className="absolute w-1 h-20 rounded-full bg-slate-300 left-1/2 top-full -translate-x-1/2 -translate-y-1/2"></div> */}
                                    <div className="absolute w-1 h-20 rounded-full bg-slate-300 left-1/2 bottom-full -translate-x-1/2 translate-y-1/2"></div>
                                </div>
                                <div>
                                    <p className="mb-2">Computer sciencie</p>
                                    <p className="text-sm font-medium text-muted-foreground">Warsaw Univeristy of Technology</p>
                                    <p className="text-xs text-muted-foreground font-medium">2022 - now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-slate-50">
                        <h2>About me</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
