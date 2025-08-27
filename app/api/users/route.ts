import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch('https://randomuser.me/api/?results=9');
    const data = await response.json();
    return NextResponse.json(data);
}