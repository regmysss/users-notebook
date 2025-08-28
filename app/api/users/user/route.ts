import db from "@/lib/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    const results = await req.json();

    try {
        await db();
        const newUser = await User.create(results);

        if (!newUser)
            return NextResponse.json({ message: "Failed to create user!" }, { status: 400 });

        return NextResponse.json({ message: "User created!" });
    } catch (error) {
        return NextResponse.json({ message: "Error creating user!", error }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");

    try {
        await db();
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser)
            return NextResponse.json({ message: "User not found!" }, { status: 404 });

        return NextResponse.json({ message: "User deleted!" });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting user!", error }, { status: 500 });
    }
}