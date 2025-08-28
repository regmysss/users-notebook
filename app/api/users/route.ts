import db from "@/lib/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const type = req.nextUrl.searchParams.get('type');

    try {
        if (type === "saved") {
            await db();
            const users = await User.find();

            if (!users)
                return NextResponse.json({ message: "No users found!" }, { status: 404 });

            return NextResponse.json({ results: users });
        }
        else {
            const response = await fetch('https://randomuser.me/api/?results=9');

            if (!response.ok)
                return NextResponse.json({ message: "Failed to fetch users!" }, { status: response.status });

            const data = await response.json();
            return NextResponse.json(data);
        }
    }
    catch (error) {
        return NextResponse.json({ message: "Error fetching users", error }, { status: 500 });
    }
}