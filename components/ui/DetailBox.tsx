import React from 'react'

type DetailBoxProps = {
    title: string;
    value: string;
}

export default function DetailBox({ title, value }: DetailBoxProps) {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="font-bold text-white/70">{title}</h3>
            <p className="w-full bg-white/10 p-2 rounded-lg">{value}</p>
        </div>
    )
}
