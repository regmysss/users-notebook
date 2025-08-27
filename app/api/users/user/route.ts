import db from "@/lib/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const results = await req.json();
    console.log(results);

    await db();
    const createUser = await User.create(results);

    return NextResponse.json(createUser);
}