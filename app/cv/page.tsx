import { Button } from "@/components/ui/button";
import { ProximaSoft } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowDown, Code, Code2, EyeIcon, Github, MailCheck } from "lucide-react";
import Image from "next/image";
import { BsCaretDown, BsCodeSlash } from "react-icons/bs";
import { FaCaretDown, FaUniversity, FaReact } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export default function CvPage() {
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            <div className="w-[1152px] m-auto relative">
                <div className="absolute w-full h-[700px] -z-10 top-[600px] opacity-30" style={{ backgroundImage: `url(/hero-geo.svg)` }}>
                    <div className="innger-bg-geo "></div>
                </div>
                <section className="flex justify-center items-center mb-20">
                    <div className="flex justify-center items-center">
                        <Image alt="profile-img" src="/bongo-cat.png" width={1300} height={980} />
                    </div>
                    <div>
                        <p className="text-lg text-muted-foreground font-medium">Hi! I'm</p>
                        <h1 className={cn(ProximaSoft.className, "text-7xl whitespace-nowrap font-bold bg-gradient-to-br from-sky-500 to-sky-800  text-transparent bg-clip-text")}>Aleksander Drwal</h1>
                        <div className="flex items-start mt-6 gap-10">
                            <div className="text-slate-100 flex items-center justify-center gap-3">
                                <Image src={"/code-svg.svg"} width={40} height={40} alt={'web-svg'} />
                                <p className="font-semibold text-muted-foreground ">Web developer</p>
                                {/* <BsCodeSlash className="text-2xl" /> */}
                            </div>
                            <div className="text-slate-100 flex items-center justify-center gap-3">
                                <Image src={"/university.svg"} width={40} height={40} alt={'web-svg'} />
                                <p className="font-semibold text-muted-foreground">Comp-sci student</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-24">
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
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laborum cum consectetur, officia commodi architecto ullam id explicabo tempore voluptatibus corrupti fuga nulla debitis, nesciunt, culpa doloribus nemo praesentium corporis.</p>
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
                </section>
                <section className="text-slate-100 mt-24">
                    <h3 className="text-center font-medium text-muted-foreground">My skills</h3>
                    <div className="flex gap-20 px-20 py-10 flex-wrap justify-center items-center">
                        {/* <div className="rounded-full bg-slate-700"> */}
                        {/* <div className="bg-gradient-to-br from-sky-400/30 to-sky-900/30 p-[1px] rounded-md">
                            <div className="bg-slate-950 rounded-md w-32 aspect-square flex justify-center flex-col items-center">
                                <div className="bg-slate-900 w-full flex-1 flex items-center justify-center rounded-t-md">
                                    <Image src={'/python.svg'} alt="skill image" width={50} height={50} />
                                </div>
                                <p className="font-medium text-muted-foreground py-2 shadow-inner">Python</p>
                            </div>
                        </div> */}
                        {/* <div className="bg-gradient-to-tr from-slate-900 to-slate-900/10 rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">React</p>
                            <FaReact className="text-6xl text-muted-foreground text-sky-500" />
                        </div>
                        <div className="bg-slate-900/50 rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">TypeScript</p>
                            <Image src={'/typescript.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-slate-900/50 rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Next.js</p>
                            <Image src={'/nextjs.svg'} alt="skill image" width={50} height={50} />
                        </div> */}
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">React</p>
                            <Image src={'/react.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">TypeScript</p>
                            <Image src={'/typescript.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">NodeJS</p>
                            <Image src={'/node.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Express</p>
                            <Image src={'/expressjs.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Sequelize</p>
                            <Image src={'/sequelize.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Next.js</p>
                            <Image src={'/nextjs.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">SQL</p>
                            <Image src={'/sql.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Tailwind</p>
                            <Image src={'/tailwind.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        {/* <div className=" bg-gradient-to-tr from-[#090F20] to-slate-950 rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Sequelize</p>
                            <Image src={'/sequelize.svg'} alt="skill image" width={50} height={50} />
                        </div> */}
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">Python</p>
                            <Image src={'/python.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        <div className="bg-[#090F20] rounded-full w-32 aspect-square flex justify-center flex-col items-center gap-2 shadow-md">
                            <p className="font-semibold text-muted-foreground text-sm">C++</p>
                            <Image src={'/c++.svg'} alt="skill image" width={50} height={50} />
                        </div>
                        {/* </div> */}
                        {/* <div className="bg-gradient-to-br from-sky-400/30 to-sky-900/30 p-[1px] rounded-md">
                            <div className="bg-slate-950 rounded-md w-32 aspect-square flex justify-center flex-col items-center gap-4">
                                <p className="font-medium text-muted-foreground">Python</p>
                                <Image src={'/python.svg'} alt="skill image" width={50} height={50} />
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
                        </div> */}
                    </div>
                </section>
                <section className="text-slate-100 mt-24">
                    <div className="flex items-center justify-start gap-2 text-muted-foreground font-medium">
                        <h3 className="">Recent projects</h3>
                        <HiChevronDown />
                    </div>
                    <div className="mt-8 flex flex-col gap-16">
                        <div className="flex gap-10">
                            <Image alt="project-1-image" src={"/strapup-main-page-cut.png"} width={500} height={500}
                                className="shadow-md rounded-lg"
                            />
                            <div className="">
                                <div>
                                    <h4 className="text-xl font-medium mt-4">Strapup - a template CLI</h4>
                                    <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, NodeJS, TailwindCSS, CLI</p>
                                    <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus laborum minus sint id alias ipsam officia corporis. Ipsum exercitationem voluptatum inventore repellat vitae! Totam optio nostrum temporibus officia nisi?</p>
                                </div>
                                <div className="flex gap-4 items-center justify-start mt-10">
                                    <Button >
                                        <Link href={'strapup.vercel.app'} className="flex items-center justify-center gap-2">
                                            <p>See code</p>
                                            <Code2 />
                                        </Link>
                                    </Button>
                                    <Button >
                                        <Link href={'strapup.vercel.app'} className="flex items-center justify-center gap-2">
                                            <p>View deployment</p>
                                            <EyeIcon />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                            <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                            <div className="bg-slate-300 w-2 aspect-square rounded-full"></div>
                        </div>
                        <div className="flex gap-10 flex-row-reverse">
                            <Image alt="project-1-image" src={"/strapup-main-page-cut.png"} width={500} height={500}
                                className="shadow-md rounded-lg"
                            />
                            <div className="">
                                <div>
                                    <h4 className="text-xl font-medium mt-4">Strapup - a template CLI</h4>
                                    <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, NodeJS, TailwindCSS, CLI</p>
                                    <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus laborum minus sint id alias ipsam officia corporis. Ipsum exercitationem voluptatum inventore repellat vitae! Totam optio nostrum temporibus officia nisi?</p>
                                </div>
                                <div className="flex gap-4 items-center justify-start mt-10">
                                    <Button >
                                        <Link href={'strapup.vercel.app'} className="flex items-center justify-center gap-2">
                                            <p>See code</p>
                                            <Code2 />
                                        </Link>
                                    </Button>
                                    <Button >
                                        <Link href={'strapup.vercel.app'} className="flex items-center justify-center gap-2">
                                            <p>View deployment</p>
                                            <EyeIcon />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="text-slate-100 mt-24 mb-64">
                    <p className="text-muted-foreground text-sm text-center">CV designed and created in React by me :). View code <Link href={'/'} className="underline inline">here</Link>.</p>
                </section>
            </div>
        </div>
    )
}
