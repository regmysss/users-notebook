import db from "@/lib/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    const results = await req.json();

    await db();
    const createUser = await User.create(results);

    return NextResponse.json(createUser);
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");

    await db();
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted", user: deletedUser });
}