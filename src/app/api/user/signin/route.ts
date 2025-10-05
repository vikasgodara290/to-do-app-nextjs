import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function GET(req : NextRequest) {
    const token: any = await req.cookies.get('token')!;
    console.log(token)
    const username = jwt.verify(token, process.env.JWT_SECRET!);

    return NextResponse.json(
        {
            username
        }
    )
}