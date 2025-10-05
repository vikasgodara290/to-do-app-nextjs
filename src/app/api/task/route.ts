import { NextRequest, NextResponse } from "next/server";
import Tasks from "./task";

export async function GET(req: NextRequest) {

    return NextResponse.json(
        Tasks
    );
}