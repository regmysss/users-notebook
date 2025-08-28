'use client';

import { useTimeout } from "@/hooks/useTimeout";
import Image from "next/image";

type ToashProps = {
    message: string;
    type: "success" | "error";
    close: () => void;
};

export default function Toash({ message, type, close }: ToashProps) {
    useTimeout(close, 3000);

    return (
        <div
            className={`flex items-center justify-between ${type === "success" ? "bg-green-700" : "bg-red-500"} font-medium rounded-lg p-4 relative w-[300px] animate-slidein`}
        >
            <p>{message}</p>
            <button
                onClick={close}
                className="flex items-center justify-center cursor-pointer hover:bg-black/10 size-8 rounded-lg"
            >
                <Image
                    src="/close.svg"
                    alt="Close"
                    width={22}
                    height={22}
                    priority
                />
            </button>
        </div>
    )
}