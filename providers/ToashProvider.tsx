'use client';
import Toash from "@/components/ui/Toash";
import { ToashContext } from "@/contexts/ToashContext";
import { ToashVariant } from "@/types/toash";
import { useMemo, useState } from "react";

type ToashProviderProps = {
    children: React.ReactNode;
}

type ToashType = {
    id: number;
    message: string;
    type: "success" | "error";
}

export function ToashProvider({ children }: ToashProviderProps) {
    const [toashs, setToashs] = useState<ToashType[]>([]);

    function openToash(message: string, type: ToashVariant = "success") {
        const newToash: ToashType = {
            id: Date.now(),
            message,
            type
        };
        setToashs((prev) => [...prev, newToash]);
    }

    function closeToash(id: number) {
        setToashs((prev) => prev.filter((toash) => toash.id !== id));
    }

    const contextValue = useMemo(() => ({
        open: openToash,
        close: closeToash,
    }), []);

    return (
        <ToashContext.Provider value={contextValue}>
            {children}
            <div
                className="fixed top-5 right-5 flex flex-col gap-2"
            >
                {
                    toashs && toashs.map((toash) => (
                        <Toash
                            key={toash.id}
                            message={toash.message}
                            type={toash.type}
                            close={() => closeToash(toash.id)}
                        />
                    ))
                }
            </div>
        </ToashContext.Provider>
    )
}
