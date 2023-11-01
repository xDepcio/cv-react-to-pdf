import { Button } from "@/components/ui/button";
import { ProximaSoft } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowDown, Github, MailCheck } from "lucide-react";
import Image from "next/image";
import { BsCaretDown, BsCodeSlash } from "react-icons/bs";
import { FaCaretDown, FaUniversity, FaReact } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export default function CvPage() {
    return (
        <div className="bg-slate-950 h-screen w-screen overflow-x-hidden">
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
                <div className="grid grid-cols-[40%_60%] gap-24">
                    <div className="text-slate-50">
                        <p className="text-amber-500 mb-6 text-xs text-center font-bold">education</p>
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
                    <div className="text-slate-50 flex flex-col justify-between">
                        <div>
                            <div className="text-muted-foreground flex items-center justify-start gap-2">
                                <p className="text-xs">About me</p>
                                <HiChevronDown />
                            </div>
                            <h2 className="mt-4 text-3xl font-medium mb-4">Short bio of mine</h2>
                            <p className="max-w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laborum cum consectetur, officia commodi architecto ullam id explicabo tempore voluptatibus corrupti fuga nulla debitis, nesciunt, culpa doloribus nemo praesentium corporis.</p>
                        </div>
                        <div className="flex items-center justify-start gap-4">
                            <Button className="flex items-center justify-center gap-2">
                                <p>View Github</p>
                                <Github />
                            </Button>
                            <Button>
                                <Link href={"mailto:olek.drwal@gmail.com"} className="flex items-center justify-center gap-2">
                                    <p>Contact me</p>
                                    <FiMail className='text-2xl' />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <section className="text-slate-100 pb-[1000px] mt-24">
                    <h3 className="text-center font-medium text-muted-foreground">My skills</h3>
                    <div className="flex gap-20 px-20 py-10 flex-wrap justify-center items-center">
                        {/* <div className="rounded-full bg-slate-700"> */}
                        <div className="bg-slate-900/50 rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2">
                            <p className="font-semibold text-muted-foreground text-sm">React</p>
                            <FaReact className="text-6xl text-muted-foreground text-sky-500" />
                        </div>
                        {/* </div> */}
                        <div className="bg-gradient-to-br from-sky-400/30 to-sky-900/30 p-[1px] rounded-md">
                            <div className="bg-slate-950 rounded-md w-32 aspect-square flex justify-center flex-col items-center gap-4">
                                <p className="font-medium text-muted-foreground">TypeScript</p>
                                <FaReact className="text-6xl text-muted-foreground" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-sky-400/30 to-sky-900/30 p-[1px] rounded-md">
                            <div className="bg-slate-950 rounded-md w-32 aspect-square flex justify-center flex-col items-center gap-4">
                                <p className="font-medium text-muted-foreground">Express</p>
                                <FaReact className="text-6xl text-muted-foreground" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-sky-400/30 to-sky-900/30 p-[1px] rounded-md">
                            <div className="bg-slate-950 rounded-md w-32 aspect-square flex justify-center flex-col items-center gap-4">
                                <p className="font-medium text-muted-foreground">NodeJS</p>
                                <FaReact className="text-6xl text-muted-foreground" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-sky-400/30 to-sky-900/30 p-[1px] rounded-md">
                            <div className="bg-slate-950 rounded-md w-32 aspect-square flex justify-center flex-col items-center gap-4">
                                <p className="font-medium text-muted-foreground">Next.js</p>
                                <FaReact className="text-6xl text-muted-foreground" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-sky-400/30 to-sky-900/30 p-[1px] rounded-md">
                            <div className="bg-slate-950 rounded-md w-32 aspect-square flex justify-center flex-col items-center gap-4">
                                <p className="font-medium text-muted-foreground">Python</p>
                                <FaReact className="text-6xl text-muted-foreground" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-sky-400/30 to-sky-900/30 p-[1px] rounded-md">
                            <div className="bg-slate-950 rounded-md w-32 aspect-square flex justify-center flex-col items-center gap-4">
                                <p className="font-medium text-muted-foreground">C++</p>
                                <FaReact className="text-6xl text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>

                </section>
            </div>
        </div>
    )
}
