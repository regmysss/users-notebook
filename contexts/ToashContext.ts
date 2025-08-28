'use client';
import { ToashVariant } from "@/types/toash";
import { createContext } from "react";

type ToashContextType = {
    open: (message: string, type?: ToashVariant) => void;
    close: (id: number) => void;
}

export const ToashContext = createContext<ToashContextType | null>(null);