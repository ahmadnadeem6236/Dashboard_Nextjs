import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import React from 'react'
import { SentChart } from './SentChart'
import { RepliedChart } from './RepliedChart'
import { ReadChart } from './ReadChart'

export default function MsgTable() {
    return (
        <div className="px-5 md:px-[40px] py-10 h-full">
            <div className="bg-[#FFFFFF]  rounded-md shadow  w-full overflow-y-scroll  ">
                {/*  <Table>
                    <TableHeader className="bg-[#F5F6F6] sticky top-0 border-[#EFEFEF]">
                        <TableRow className="">
                            <TableHead className=" md:w-[192px]">
                                Label
                            </TableHead>
                            <TableHead>Sent Data</TableHead>
                            <TableHead>Message Mode</TableHead>
                            <TableHead className="md:w-[200px]">
                                Message Type
                            </TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <Avatar>
                                        <AvatarFallback className="bg-green-500 text-white">
                                            N
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Nadeem
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>25 March 2024</TableCell>
                            <TableCell>Personalized</TableCell>
                            <TableCell>Auto Generate</TableCell>
                            <TableCell>
                                <div className="flex gap-10">
                                    <Button
                                        variant="destructive"
                                        className="bg-[#FFDEDE] text-[#D33939] text-[12px] rounded-3xl"
                                    >
                                        Send now Confirmation
                                    </Button>
                                    <span className=" rotate-90 font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <Avatar>
                                        <AvatarFallback className="bg-green-500 text-white">
                                            N
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Nadeem
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>25 March 2024</TableCell>
                            <TableCell>Personalized</TableCell>
                            <TableCell>Auto Generate</TableCell>
                            <TableCell>
                                <div className="flex gap-10">
                                    <Button
                                        variant="destructive"
                                        className="bg-[#FFDEDE] text-[#D33939] text-[12px] rounded-3xl"
                                    >
                                        Send now Confirmation
                                    </Button>
                                    <span className=" rotate-90 font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <Avatar>
                                        <AvatarFallback className="bg-green-500 text-white">
                                            N
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Nadeem
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>25 March 2024</TableCell>
                            <TableCell>Personalized</TableCell>
                            <TableCell>Auto Generate</TableCell>
                            <TableCell>
                                <div className="flex gap-10">
                                    <Button
                                        variant="destructive"
                                        className="bg-[#FFDEDE] text-[#D33939] text-[12px] rounded-3xl"
                                    >
                                        Send now Confirmation
                                    </Button>
                                    <span className=" rotate-90 font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <Avatar>
                                        <AvatarFallback className="bg-green-500 text-white">
                                            N
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Nadeem
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>25 March 2024</TableCell>
                            <TableCell>Personalized</TableCell>
                            <TableCell>Auto Generate</TableCell>
                            <TableCell>
                                <div className="flex gap-10">
                                    <Button
                                        variant="destructive"
                                        className="bg-[#FFDEDE] text-[#D33939] text-[12px] rounded-3xl"
                                    >
                                        Send now Confirmation
                                    </Button>
                                    <span className=" rotate-90 font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <Avatar>
                                        <AvatarFallback className="bg-green-500 text-white">
                                            N
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Nadeem
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>25 March 2024</TableCell>
                            <TableCell>Personalized</TableCell>
                            <TableCell>Auto Generate</TableCell>
                            <TableCell>
                                <div className="flex gap-10">
                                    <Button
                                        variant="destructive"
                                        className="bg-[#FFDEDE] text-[#D33939] text-[12px] rounded-3xl"
                                    >
                                        Send now Confirmation
                                    </Button>
                                    <span className=" rotate-90 font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <Avatar>
                                        <AvatarFallback className="bg-green-500 text-white">
                                            N
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Nadeem
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>25 March 2024</TableCell>
                            <TableCell>Personalized</TableCell>
                            <TableCell>Auto Generate</TableCell>
                            <TableCell>
                                <div className="flex gap-10">
                                    <Button
                                        variant="destructive"
                                        className="bg-[#FFDEDE] text-[#D33939] text-[12px] rounded-3xl"
                                    >
                                        Send now Confirmation
                                    </Button>
                                    <span className=" rotate-90 font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <Avatar>
                                        <AvatarFallback className="bg-green-500 text-white">
                                            N
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Nadeem
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>25 March 2024</TableCell>
                            <TableCell>Personalized</TableCell>
                            <TableCell>Auto Generate</TableCell>
                            <TableCell>
                                <div className="flex gap-10">
                                    <Button
                                        variant="destructive"
                                        className="bg-[#FFDEDE] text-[#D33939] text-[12px] rounded-3xl"
                                    >
                                        Send now Confirmation
                                    </Button>
                                    <span className=" rotate-90 font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table> */}
                <Table>
                    <TableHeader className="bg-[#F5F6F6] sticky top-0 border-[#EFEFEF]">
                        <TableRow className="">
                            <TableHead className=" md:w-[300px]">
                                Name
                            </TableHead>
                            <TableHead>Schedule</TableHead>
                            <TableHead>Recipients</TableHead>
                            <TableHead className="">Sent</TableHead>
                            <TableHead>Read</TableHead>
                            <TableHead>Replied</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Limited Time Launched Offer
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>01/01/2024</TableCell>
                            <TableCell>10,000,00</TableCell>
                            <TableCell className="text-center">---</TableCell>
                            <TableCell className="text-center">---</TableCell>
                            <TableCell className="text-center">---</TableCell>
                            <TableCell>
                                <button className="w-[73px] h-[27px] bg-[#FFDEDE] text-[#D33939] border-[1px] border-[#D33939] text-[12px] rounded-3xl">
                                    Send now
                                </button>
                            </TableCell>
                            <TableCell>
                                {' '}
                                <div className="rotate-90 flex items-center justify-center">
                                    <span className="  font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Limited Time Launched Offer
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>01/01/2024</TableCell>
                            <TableCell>10,000,00</TableCell>
                            <TableCell className="text-center">---</TableCell>
                            <TableCell className="text-center">---</TableCell>
                            <TableCell className="text-center">---</TableCell>
                            <TableCell>
                                <button className="w-[73px] h-[27px] bg-[#FFEFCE] text-[#E99E05]  text-[12px] rounded-3xl">
                                    Waiting
                                </button>
                            </TableCell>
                            <TableCell>
                                {' '}
                                <div className="rotate-90 flex items-center justify-center">
                                    <span className="  font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Limited Time Launched Offer
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>01/01/2024</TableCell>
                            <TableCell>10,000,00</TableCell>
                            <TableCell>{<SentChart />}</TableCell>
                            <TableCell>{<ReadChart />}</TableCell>
                            <TableCell>{<RepliedChart />}</TableCell>
                            <TableCell>
                                <button className="w-[73px] h-[27px] bg-[#EAEAEA] text-[#888888] border-[1px] border-[#EAEAEA] text-[12px] rounded-3xl">
                                    Sent
                                </button>
                            </TableCell>
                            <TableCell>
                                {' '}
                                <div className="rotate-90 flex items-center justify-center">
                                    <span className="  font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-5">
                                    <span className="text-[#111111] text-sm font-semibold">
                                        Limited Time Launched Offer
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>01/01/2024</TableCell>
                            <TableCell>10,000,00</TableCell>
                            <TableCell>{<SentChart />}</TableCell>
                            <TableCell>{<ReadChart />}</TableCell>
                            <TableCell>{<RepliedChart />}</TableCell>
                            <TableCell>
                                <button className="w-[73px] h-[27px] bg-[#EAEAEA] text-[#888888] border-[1px] border-[#EAEAEA] text-[12px] rounded-3xl">
                                    Sent
                                </button>
                            </TableCell>
                            <TableCell>
                                {' '}
                                <div className="rotate-90 flex items-center justify-center">
                                    <span className="  font-bold  text-[20px] ">
                                        ...
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
