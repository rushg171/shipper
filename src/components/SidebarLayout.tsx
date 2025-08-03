'use client'

import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function SidebarLayout({children}:{children: React.ReactNode}){
    return (
        <div className="flex min-h-screen min-w-screen bg-amber-400">
            <Sidebar/>
            <main className="flex w-full">{children}</main>
        </div>
    )
}